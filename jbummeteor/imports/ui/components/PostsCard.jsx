import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//This is a complete example of a card that we can create and use in the content section of the dashboard
const PostsCard = () => (
  <div className="col-sm-4 row-no-padding">
    <Card>
      <CardTitle title="Posts"/>
      <CardText><h5>23,532</h5></CardText>
      <CardActions>
        <FlatButton label="See Posts" />
      </CardActions>
    </Card>
  </div>
);

export default PostsCard;
