import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//This is a complete example of a card that we can create and use in the content section of the dashboard
const RepliesCard = () => (
  <div className="col-sm-4 row-no-padding">
    <Paper zDepth={1}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{height: '100', width: 5, backgroundColor: 'green'}}/>
        <div style={{marginLeft: '15%', marginTop: '5.5%'}}>
          <p style={{fontSize: 32}}>12,532 <br />
          <p style={{fontSize: 17, color: 'gray'}}>Replies</p></p>
        </div>
      </div>
    </Paper>
  </div>
);

export default RepliesCard;
