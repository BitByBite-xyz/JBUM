import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//This is a complete example of a card that we can create and use in the content section of the dashboard
const RepliesCard = () => (
  <div className="col-sm-4 row-no-padding">
    <Card>
      <CardTitle title="Replies"/>
      <CardText><h5>11,649</h5></CardText>
      <CardActions>
        <FlatButton label="See Replies" />
      </CardActions>
    </Card>
  </div>
);

export default RepliesCard;
