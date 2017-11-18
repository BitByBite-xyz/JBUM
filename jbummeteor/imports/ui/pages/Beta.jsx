import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

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
    state = {
        index:0,
        email:''
    }

    handleCreateAccount = () => {
        const { email } = this.state;
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            alert('please put in a valid email')
            return;
        }
        else {
           // setTimeout(function () { window.location = "https://itunes.apple.com/us/app/just-between-u-and-me/id1302879583?mt=8"; }, 25);
           alert('Check back soon to create an account!')
            //window.location = "jbum://2wGQQTyWQgFgYg62N";
        }       
    }

    render () {
        const { index } = this.state;
        switch (this.state.index) {
            case 0:
                return (
                        <div> 
                            <h1> Welcome to the JBUM Beta! </h1>
                            <p> To begin the account setup process please download the app <a href="https://itunes.apple.com/us/app/just-between-u-and-me/id1302879583?mt=8">HERE</a> and open this link on the decice with the app.</p>
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

  
export default class extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <center >
            <Paper style={style} zDepth={1}>
            <Stepper/>
            </Paper>
            
            

            </center>
            </MuiThemeProvider>
        );
    }
}