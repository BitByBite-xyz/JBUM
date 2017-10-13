import React, { Component, PropTypes, Text } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Posts } from '../../api/posts/posts';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Badge from 'material-ui/Badge';

//Screen components
import ResponseQuestion from '../components/ResponseQuestion';
import AllPosts from '../components/AllPosts';
import ProperPost from '../components/ProperPost';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

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
                   modalContent: postContent,
                   snackbarOpen: false });
  };

  handleClose = () => {
    this.setState({open: false, snackbarOpen: false});
  };

  handleRespond = () => {
    const { modalContent, response } = this.state;
    const reply = this.refs.replyField.getValue();
    if (reply.length < 2) {
      alert('Response too short!');
      return;
    }
    Meteor.call('Posts.reply', modalContent._id, reply, (err) => {
      if (err) {
        console.log("reply err "+err.details);
        return;
      } else {

        console.log("reply added!");
        this.handleClose();
        this.setState({
          snackbarOpen: true,
        });
      }
    });
  };

  handleFavorite = (postContent) => {
    const params = {
      postId: postContent._id
    }
    Meteor.call('responder.favorite',params);
    //Meteor.users.update(this.userId, {$set: obj });
    console.log(Meteor.user())
  }

  handleArchive = (postContent) => {
    const params = {
      postId: postContent._id
    }
    Meteor.call('responder.archive',params);
    //Meteor.users.update(this.userId, {$set: obj });
    console.log(Meteor.user())
  }

  handleTouchTap = () => {
    this.setState({
      snackbarOpen: true,
    });
  };

  renderComments = () => {
    const { modalContent } = this.state;
    if (modalContent) {
      if (!modalContent.post_comments.length) return 'No replies to display';
      return modalContent.post_comments.map((item) => (
                <div style={{paddingBottom:5}}> • {this.findUsername(item.user_id)}: {item.comment_body} </div>
              ));
    }
  }

  findUsername(id){
    return this.props.userData.find((user) => (user._id === id)).username;
  }

  renderModalContent = () => {
    const { modalContent, response } = this.state;

    return (
      <div>
        <div  style={{marginLeft: '4%'}}>
          {modalContent.post_body}
          <div style={{marginBottom: 5}}/>
        </div>
        <div  style={{marginLeft: '4%'}}>
          <font size='5'>Replies</font>
          <div style={{marginBottom: 10}}/>
          {!this.renderComments()? 'Nothing to display' :this.renderComments() }
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

  getFav = () => {
    const { posts} = this.props; 
    const fav = Meteor.user().favorites;
    const arr = [];
    if (fav){
      posts.map((post=>{
        if (fav.indexOf(post._id) !== -1){
          arr.push(post);
        }
      }))
    }
    return arr;
    
  }

  renderPosts = () => {
    const { responderPosts, posts, adultPosts } = this.props;    
    const { pathname } = this.props.history.location;
    switch (pathname) {
      case '/responder':
        return this.renderPostsHelper(responderPosts);
        break;
      case '/responder/all':
        return this.renderPostsHelper(posts);
        break;
      case '/responder/adult':
        return this.renderPostsHelper(adultPosts);
        break;
      case '/responder/fav':
        return this.renderPostsHelper(this.getFav());
        break;
      default:
        return <div>yikes</div>
        break;
    }
  }

  renderPostsHelper = (posts) => {
    const archived = Meteor.user().archived;
    if (posts) {
      return (
        posts.map((post) => {
          if (archived && archived.indexOf(post._id) !== -1) return null;
          return (<ProperPost
            key={post._id}
            postContent={post}
            handleArchive={this.handleArchive}
            handleOpen={this.handleOpen}
            handleFavorite={this.handleFavorite}
        />)
        }
      ))
    }
  }

  renderGrid = () => {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
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
      <div class="col-sm-12" style={{paddingBottom: '50%',display: 'flex'}}>
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
          this.renderGrid(): null}
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
  const userHandle = Meteor.subscribe('userList');

  return {
    userData: Meteor.users.find({}).fetch(),
    responderPosts: Posts.find({$or: [{post_visibility: 'Professional'}, {post_visibility: 'Adult'}]}).fetch(),
    adultPosts: Posts.find({$or: [{post_visibility: 'Adult'}]}).fetch(),
    posts: Posts.find({}),
    postsReady: handle.ready()
  }
}, Responder);
