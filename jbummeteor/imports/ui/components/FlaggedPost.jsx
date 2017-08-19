import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const FlaggedPost = (props) => {
  const { postTitle, postQuestion } = props;

  return (
    <div className="col-sm-4 flaggedPostContainer" style={{marginBottom: 15}}>
      <Paper zDepth={1} style={{borderRadius: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
        <div className="flaggedPostContent" style={{ height: 150, textOverflow: 'elipsis'}}>
          <p style={{fontSize: 18}}>{postTitle}</p>
          <Divider style={{width: '95%', marginBottom: 10, marginLeft: '2.5%'}}/>
          <p>{postQuestion}</p>
        </div>
          <center><FlatButton style={{marginRight: 10}} primary={true} label="Unflag" /><FlatButton secondary={true} label="Delete Post" /></center>
      </Paper>
    </div>
);}

export default FlaggedPost;
