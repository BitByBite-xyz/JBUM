import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ProperPost = ({handleOpen, postContent}) => (
    <div  className="help" style={{ height:400,marginBottom: 15}}>
  <Card style={{maxWidth:500}}>
    <CardHeader
      title={postContent.post_title}
      subtitle={postContent.post_body}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Reply" onClick={() => handleOpen(postContent)}/>
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
  </div>
);

export default ProperPost;