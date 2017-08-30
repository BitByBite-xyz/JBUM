import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const ResponceQuestion = (props) => {
  const { postContent } = props;

  return (
    <div className="col-sm-4 flaggedPostContainer" style={{marginBottom: 15}}>
      <Paper zDepth={1} style={{borderRadius: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
        <div className="flaggedPostContent" style={{ height: 170, overflow: 'scroll'}}>
          <p style={{fontSize: 18, marginLeft: '2.2%'}}>{postContent.post_title}</p>
          <Divider style={{width: '95%', marginBottom: 10, marginLeft: '2.5%'}}/>
          <p style={{marginLeft: '2.2%'}}>{postContent.post_body}</p>
        </div>
      </Paper>
    </div>
);}

export default ResponceQuestion;
