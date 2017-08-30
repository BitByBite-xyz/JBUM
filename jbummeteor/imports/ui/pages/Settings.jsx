import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Settings extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (

      <div className="col-sm-12 row-no-padding">
        <Paper zDepth={2}>
          <h1>Settings</h1>
      </Paper>
      </div>
    );
  }
}



export default Settings;
