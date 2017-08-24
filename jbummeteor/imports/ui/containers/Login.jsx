import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  height: 350,
  width: 320,
  marginTop: '10%',
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: 5
};

  class Login extends Component {
    loginUser = (event) => {
      event.preventDefault();
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();
        Meteor.loginWithPassword(email, password, (err) => {
         if(err){
           console.log('unsuccessful login');
           this.setState({
             error: err.reason
           });
         } else {
           this.props.history.push('/home');
         }
       });
       //console.log(email + ' ' + password);
    }

    render() {
      return(
      <MuiThemeProvider>
        <form onSubmit={this.loginUser.bind(this)}>
          <div className="row">
            <center>
              <Paper zDepth={2} style={style}>
                <h4 style={{marginTop: 55, marginBottom: 50, color: '#919799'}}>JBUM Admin</h4>
                <input type="text" placeholder="Email" ref='email' style={{width: '80%', marginBottom: 25}} />
                <input type="password" placeholder="Password" ref='password' style={{width: '80%'}} />
                <RaisedButton label="Login" primary={true} type='submit' style={{width: '80%', marginTop: 10}}/>
              </Paper>
            </center>
          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}
export default Login;
