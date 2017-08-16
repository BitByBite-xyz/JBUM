import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

const style = {
  height: 350,
  width: '25%',
  marginTop: '10%',
  textAlign: 'center',
  display: 'inline-block',
};

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
        <MuiThemeProvider>
          <div className="row">
            <center>
              {/*At the moment, the login doesn't actually do anything besides bring you to the dasboard when you click login*/}
              <Paper zDepth={2} style={style}>
                <h4 style={{marginTop: 55, marginBottom: 40, color: '#919799'}}>JBUM Admin</h4>
                <input type="text" placeholder="Username" style={{width: '80%', marginBottom: 20}} />
                <input type="password" placeholder="Password" style={{width: '80%'}} />
                <Link to="/Dashboard"><RaisedButton label="Login" primary={true} style={{width: '80%'}}/></Link>
              </Paper>
            </center>
          </div>
        </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
};

export default App;
