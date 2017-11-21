import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import StatsCard from '../components/StatsCard';
import SendPost from '../components/SendPost';

import { Posts } from '../../api/posts/posts';
import { BetaEmails } from '../../api/accountCreation/betaEmails';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  handleAddBetaEmail = () => {
    const email = this.refs.betaEmailField.getValue();
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(email)) {
        alert('Please put in a valid email!')
        return;
    }
    Meteor.call('addBetaEmail', email, (err) => {
      if (err){
          alert('Cannot add email.\n'+err)
      }
      else {
        alert(email+' added!');
      }
    });       
  }

  countReplies(){
    const { posts } = this.props;
    let count = 0;
    if (!posts) {
      return;

    }
    _.each(posts, function (post) {
      count = count + post.post_comments.length;
    });
    return count;
  }

  handleNotif = () => {
    const message = this.refs.messageField.getValue()
    const params = {
      sendToUserId:this.state.value,
      alert:message,
      postId:12
    }
    Meteor.call('notifications.send.APNMsg',params, (err) => {
      if (err) {
        console.log("notif err"+err.details);
        return;
      } else {
        console.log("notified");
        }
      });
  }

  renderMenuItem = () => {
    const { users } = this.props;
    let it = [];
    users.map((item) => {
      if (item.pushToDevices) {
        it.push({username: item.username, id: item._id});
      }
    })
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        {it.map((item) => (
          <MenuItem value={item.id} primaryText={item.username} />
        ))}
        </DropDownMenu>
    )
  }

  renderStats = () => {
    const { posts, users, emails } = this.props;
    return (
      <div>
        <StatsCard
          cardTitle={users.length}
          cardDiscriptor={'Users'}
          cardStyle={{height: 100, width: 5, backgroundColor: 'blue'}}
        />
        <StatsCard
          cardTitle={posts.length}
          cardDiscriptor={'Posts'}
          cardStyle={{height: 100, width: 5, backgroundColor: 'orange'}}
        />
        <StatsCard
          cardTitle={this.countReplies()}
          cardDiscriptor={'Replies'}
          cardStyle={{height: 100, width: 5, backgroundColor: 'green'}}
        />
      </div>
    )
  }

  renderNotificationTrolling = () => {
    return (
      <div style={{marginLeft:15,paddingTop:100}}>
        <Paper zDepth={1} style={{borderRadius: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, width: 300, height:200}}>
          {this.renderMenuItem()}
          <br />
          <TextField
            floatingLabelText="message"
            ref="messageField"
          />
          <br />
          <RaisedButton label="Send" fullWidth={true} onClick={this.handleNotif}/>
        </Paper>
      </div>
    )
  }

  renderAddEmail = () => {
    return (
      <div style={{marginLeft:15,paddingTop:100}}>
        <Paper zDepth={1} style={{borderRadius: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, width: 300, height:200}}>
          <br />
          <TextField
            floatingLabelText="Add Email to JBUM Beta"
            ref="betaEmailField"
          />
          <br />
          <RaisedButton label="Add Beta Email" fullWidth={true} onClick={this.handleAddBetaEmail}/>
        </Paper>
      </div>
    )
  }

  render() {
    const { posts, users } = this.props;

    return (
      <div>
        {this.renderStats()}
        {this.renderNotificationTrolling()}
        {this.renderAddEmail()}
      </div>
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
  const handles = Meteor.subscribe('BetaEmails.pub.list');
  const handlee = Meteor.subscribe('userList')
  return {
  //  flaggedPosts: Posts.find( { $where: "this.post_flags.length > 0" }).fetch(),
    posts: Posts.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
    betaEmails: BetaEmails.find({}).fetch()
  }
}, Dashboard);
