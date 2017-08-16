import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//This is a complete example of a card that we can create and use in the content section of the dashboard
const UsersCard = () => (
  <Card>
    <CardTitle title="Users"/>
    <CardText><h5>500</h5></CardText>
    <CardActions>
      <FlatButton label="See Users" />
    </CardActions>
  </Card>
);

export default UsersCard;
