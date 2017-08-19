import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';

const StatsCard = (props) => {
  const { cardTitle, cardDiscriptor, cardStyle} = props;

  return (
        <div className="col-sm-4 row-no-padding">
          <Paper zDepth={1}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={cardStyle}/>
              <div style={{marginLeft: '15%', marginTop: '5.5%'}}>
                <p className="dashboardCardNumber" style={{fontSize: 32}}>{cardTitle}<br /></p>
                 <p style={{fontSize: 17, color: 'gray'}}>{cardDiscriptor}</p>
              </div>
            </div>
          </Paper>
        </div>
      );}

export default createContainer(() => {
  Meteor.subscribe("Posts.pub.list");
  return {
    cardTitle: Posts.find({}).count()
  }
}, StatsCard);
