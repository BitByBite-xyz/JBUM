import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const ResponseQuestion = (props) => {
  const { postContent, onClick } = props;

  handleRespondButtonPressed = () => {
    onClick(postContent)

  }

  renderMenu = () => {
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  }

  return (
    <div>
      <div className="col-sm-4 flaggedPostContainer" style={{marginBottom: 15}}>
        <Paper zDepth={1} style={{borderRadius: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
          <div className="flaggedPostContent" style={{ height: 150, overflow: 'scroll'}}>
            <p style={{fontSize: 18, marginLeft: '2.2%'}}>{postContent.post_title}</p>
            <Divider style={{width: '95%', marginBottom: 10, marginLeft: '2.5%'}}/>
            <p style={{marginLeft: '2.2%'}}>{postContent.post_body}</p>
          </div>
            <center><FlatButton style={{marginTop: 8}} primary={true} onClick={handleRespondButtonPressed} label="Respond" /></center>
        </Paper>
      </div>
      <div>


      </div>
    </div>
);}

export default ResponseQuestion;
