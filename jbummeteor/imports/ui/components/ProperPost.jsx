import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ReplyIcon from 'material-ui/svg-icons/content/reply';
import ArchiveIcon from 'material-ui/svg-icons/action/delete-forever';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import {blue500, red500, greenA200,cyan500,pinkA200} from 'material-ui/styles/colors';

const returnColor = (id) => {
  const fav = Meteor.user().favorites;
  if (fav){
    if (fav.indexOf(id) !== -1){
      return red500;
    }
  }
  return null;
}
const ProperPost = ({handleOpen, postContent,handleArchive,handleFavorite}) => (
    <div  style={{width: 500, height:350,overflow:'scroll'}}>
      <Card style={{width:500}}>
        <CardHeader
          title={postContent.post_title}
          subtitle={postContent.post_body}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton icon={<ReplyIcon hoverColor={blue500}/>} onClick={() => handleOpen(postContent)}/>
          <FlatButton icon={<ArchiveIcon hoverColor={blue500}/>} onClick={()=> handleArchive(postContent)}/>
          <FlatButton icon={<FavoriteIcon color={returnColor(postContent._id)} hoverColor={red500}/>} onClick={()=> handleFavorite(postContent)}/>
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