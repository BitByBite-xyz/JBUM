import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SendPost = () => (
  <div className="col-sm-6 row-no-padding" style={{marginTop: 15}}>
    <Paper zDepth={1}>
      <div>
        <form style={{padding: 10}}>
          <TextField
            style={{width: '80%', marginLeft: '10%', marginTop:  '2%'}}
            hintText="Post Title"
            multiLine={true}
          />
          <TextField
            style={{width: '80%', marginLeft: '10%', marginBottom: '4%'}}
            hintText="Post Content"
            multiLine={true}
            rows={2}
            rowsMax={4}
            />
          <RaisedButton label="Submit" style={{width: '80%', marginLeft: '10%', marginBottom: '2%'}} />
        </form>
      </div>
    </Paper>
  </div>
);

export default SendPost;
