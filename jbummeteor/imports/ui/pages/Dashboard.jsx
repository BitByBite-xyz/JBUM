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

//Screen components
import StatsCard from '../components/StatsCard';
import SendPost from '../components/SendPost';

import { Posts } from '../../api/posts/posts';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

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
    const it = [];
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

  render() {
    const { posts, users } = this.props;

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
        <Paper zDepth={1} style={{borderRadius: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, width: 300, height:300}}>
          {this.renderMenuItem()}
          <br />
          <TextField
            floatingLabelText="message"
            ref="messageField"
          />
          <br />
          <RaisedButton label="Send" onClick={this.handleNotif}/>
        </Paper>
      </div>
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
  const handlee = Meteor.subscribe('userList')
  return {
  //  flaggedPosts: Posts.find( { $where: "this.post_flags.length > 0" }).fetch(),
    posts: Posts.find({}).fetch(),
    users: Meteor.users.find({}).fetch()
  }
}, Dashboard);
