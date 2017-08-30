import React, { Component, PropTypes, Text } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Posts } from '../../api/posts/posts';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

//Screen components
import ResponceQuestion from '../components/ResponceQuestion';

class Responder extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      snackbarOpen: false,
      modalContent: '',
      modalTitle: '',
      response: '',
    };
  }

  handleOpen = (postContent) => {
    this.setState({open: true,
                   modalContent: postContent});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleRespond = () => {
    const { modalContent, response } = this.state;
    const reply = this.refs.replyField.getValue();

  handleTouchTap = () => {
  this.setState({
    snackbarOpen: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      snackbarOpen: false,
      });
    };

    Meteor.call('Posts.reply', modalContent._id, reply, (err) => {
      if (err) {
        console.log("reply err "+err.details);
        return;
      } else {
        handleTouchTap();
        console.log("reply added!");
        this.setState({open: false});
      }
    });

  };

  renderModalContent = () => {
    const { modalContent, response } = this.state;

    return (
      <div>
        <div  style={{marginLeft: '4%'}}>
          {modalContent.post_body}
        </div>
        <TextField
          hintText="Your response"
          floatingLabelText="Respond to this question..."
          multiLine={true}
          rows={1}
          ref="replyField"
          onChange={(newValue) => this.setState({response:newValue})}
          style={{width: '90%', marginLeft: '4%'}}
        /><br />
    </div>
    )
  }

  renderResponderPosts = () => {
    const { responderPost } = this.props;

    if (responderPost) {
      return (responderPost.map((post) => (
        <ResponceQuestion
          postContent={post}
          onClick={this.handleOpen}
        />
      )))
    }
  }
  render() {
    const {  postsReady } = this.props;
    const { modalContent, postContent,response } = this.state;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Respond"
        primary={true}
        disabled={response.length === 0}
        onClick={this.handleRespond}
      />,
    ];

    return (
      <div>
        <Dialog
          titleStyle={{marginLeft: '3.8%'}}
          title={modalContent.post_title}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          {this.renderModalContent()}
        </Dialog>
        {postsReady ?
          this.renderResponderPosts(): null}
          <Snackbar
            open={this.state.snackbarOpen}
            message="Post Response Sent!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
      </div>
    );
  }
}


export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
  return {
    responderPost: Posts.find({post_visibility: 'Responder'}).fetch(),
    postsReady: handle.ready()
  }
}, Responder);
