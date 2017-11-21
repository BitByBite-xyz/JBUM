import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { BetaEmails } from '../../api/accountCreation/betaEmails';

const MyAwesomeReactComponent = () => (
    <RaisedButton label="Default" />
  );
  
const style = {
    height: window.innerHeight-60,
    width: window.innerWidth-60,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Stepper extends Component {
    constructor(props){
        super(props);
    }
    state = {
        index:0,
        email:''
    }

    handleCreateAccount = () => {
        const { email } = this.state;
        const { emails } = this.props;
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            alert('Please put in a valid email!')
            return;
        }

        Meteor.call('canCreateAccount', email, (err) => {
            if (err){
                if( confirm( `Cannot create account.\n${err}.\n\nDo you want to email our support?`)){
                    window.location = 'mailto:contact@bitbybite.co?subject=⚠️ Cannot Create Account ⚠️'
                }
            }
            else {
                window.location = "jbum://2wGQQTyWQgFgYg62N";
                setTimeout( () => {
                    if( confirm( 'You do not seem to have JBUM installed, do you want to go download it now?')){
                        window.location = 'https://itunes.apple.com/us/app/just-between-u-and-me/id1302879583?mt=8'
                    }
                }, 300); 
            }
        });      
    }

    render () {
        const { index } = this.state;
        switch (this.state.index) {
            case 0:
                return (
                        <div> 
                            <h1> Welcome to the JBUM Beta! </h1>
                            <p> To begin the account setup process please download the app <a href="https://itunes.apple.com/us/app/just-between-u-and-me/id1302879583?mt=8">HERE</a> and open this link on the device with the app.</p>
                            <br />
                            <RaisedButton buttonStyle={{backgroundColor: "#1abc9c"}} onClick={()=>this.setState({index:++index})} label="Continue" />
                        </div>)
                break;
            default:
                return (<div> 
                            <h3> Please enter your email address </h3>
                            <br />
                            <TextField
                                hintText="Your email"
                                onChange={(e, newVal) => this.setState({email:newVal})}
                            />
                            <br />
                            <br />
                            <RaisedButton buttonStyle={{backgroundColor: "#1abc9c"}} onClick={this.handleCreateAccount} label="Create Account" />
                        </div>)
                break;
        }
    }
}
  
class Beta extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider>
                <center >
                    <Paper style={style} zDepth={1}>
                        <Stepper 
                            emails={this.props.emails}
                        />
                    </Paper>
                </center>
            </MuiThemeProvider>
        );
    }
}


export default createContainer(() => {
    const handle = Meteor.subscribe('BetaEmails.pub.list');
    return {
      emails: BetaEmails.find({}).fetch(),
    }
  }, Beta);
  