import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const FlaggedPost = (props) => {
  const { postContent } = props;
  unFlagPost = (pc) => {
    Meteor.call('Posts.unflag', pc._id.toString(), (err) => {
      if (err) {
        console.log("Post err"+err.details);
        return;
      } else {
        console.log("Post has been unflagged");
        }
      });
  }
  deletePost = (pc) => {
    Meteor.call('Posts.remove', pc._id.toString(), (err) => {
      if (err) {
        console.log("Post err "+err.details);
        return;
      } else {
        console.log("Post has been unflagged");
        }
      });
  }
  return (
    <div className="col-sm-4 flaggedPostContainer" style={{marginBottom: 15}}>
      <Paper zDepth={1} style={{borderRadius: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
        <div className="flaggedPostContent" style={{ height: 150, overflow: 'scroll'}}>
          <p style={{fontSize: 18}}>{postContent.post_title}</p>
          <Divider style={{width: '95%', marginBottom: 10, marginLeft: '2.5%'}}/>
          <p>{postContent.post_body}</p>
        </div>
          <center><FlatButton style={{marginRight: 10}} primary={true} label="Unflag" onClick={() => unFlagPost(postContent)} /><FlatButton secondary={true} label="Delete Post" onClick={() => deletePost(postContent)} /></center>
      </Paper>
    </div>
);}

export default FlaggedPost;
