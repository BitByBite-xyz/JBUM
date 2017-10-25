import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ReplyIcon from 'material-ui/svg-icons/content/reply';
import ArchiveIcon from 'material-ui/svg-icons/action/delete-forever';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import {blue500, red500, greenA200,cyan500,pinkA200} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import {
  Link
} from 'react-router-dom';
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
const returnColor = (id) => {
  const fav = Meteor.user().favorites;
  if (fav){
    if (fav.indexOf(id) !== -1){
      return red500;
    }
  }
  return null;
}
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#913D88', '#F7CA18',
                '#F4B350', '#F2784B', '#D2D7D3', '#1F3A93', '#66CC99', '#E87E04',
                '#CF000F', '#336E7B', '#F9690E', '#BF55EC', '#59ABE3'];

const ProperPost = ({handleOpen, postContent,handleArchive,handleFavorite}) => {
  let i = -1;
  return (
    <div  className="col-sm-2" style={{margin:20,overflow:'scroll', minHeight: 100,minWidth:370}}>
      <Card style={{width:350}}>
        <CardHeader
          title={postContent.post_title}
          subtitle={postContent.post_body}
          actAsExpander={true}
          showExpandableButton={true}
       />
        <div style={{marginLeft:10,display: 'flex',overflow:'scroll'}}>
          {postContent.post_categories.map((cat) => {
            i++;
            return (
              <Chip
                key={cat}
                style={styles.chip}
                backgroundColor={COLORS[i]}
              >
                {cat}
              </Chip>
            )
          })}
        </div >

          <CardActions>
            <FlatButton icon={<ReplyIcon hoverColor={blue500}/>} onClick={() => handleOpen(postContent)}/>
            <FlatButton icon={<ArchiveIcon hoverColor={blue500}/>} onClick={()=> handleArchive(postContent)}/>
            <FlatButton icon={<FavoriteIcon color={returnColor(postContent._id)} hoverColor={red500}/>} onClick={()=> handleFavorite(postContent)}/>
          </CardActions>
          <CardText expandable={true}>
          <div style={{display: 'inline'}}>
            {postContent.post_comments.map((comment)=> {
              return (
                <div key={comment.comment_id}>
                  <Link to={'/usersprofile/'+comment.user_id}>
                    {comment.user_id}💭: {comment.comment_body}
                  </Link>
                  <br />
                  <br />
                </div>
              )
            })}
          </div>
          </CardText>
       </Card>
    </div>
    )
}

export default ProperPost;