import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Link } from 'react-router-dom';

//Screen components
import StatsCard from '../components/StatsCard';
import SendPost from '../components/SendPost';

import { Posts } from '../../api/posts/posts';

class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  countReplies(){
    const { posts } = this.props;

    if (!posts) {
      return;

    }
    let count = 0;

    _.each(posts, function (post) {
      count = count + post.post_comments.length;
    });
    return count;
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
        {/*<SendPost />*/}
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
