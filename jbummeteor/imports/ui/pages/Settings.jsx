import React, {Component} from 'react';
import GenderSurveyChart from '../components/GenderSurveyChart';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Settings extends Component {
  constructor(props){
    super(props);

  }
  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            this.props.history.push('/');
        }
    });
  }
  render() {
    return (

      <div className="col-sm-12 row-no-padding">
        <Paper zDepth={2}>
          <h1>Settings</h1>
          <RaisedButton label="logout" onClick={this.logout} />


      </Paper>
      </div>
    );
  }
}



export default Settings;
