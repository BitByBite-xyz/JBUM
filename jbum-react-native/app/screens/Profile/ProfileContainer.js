import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import Profile from './Profile';
import Loading from '../../components/Loading';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
  }


  render() {
		const { user_posts,responded_posts,liked_posts,postsReady } = this.props;

		return (
      <Profile
				user_posts={user_posts}
				responded_posts={responded_posts}
				liked_posts={liked_posts}
				postsReady={postsReady}
        updateState={this.setState.bind(this)}
				navigation={this.props.navigation}
        {...this.state}
      />

    );
  }
}

ProfileContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');

  return {
    user_posts: Meteor.collection('posts').find({ user_id: Meteor.userId() }, { sort: { created: -1 } }),
		responded_posts: Meteor.collection('posts').find({ "post_comments.user_id": Meteor.userId() }, { sort: { created: -1 } }),
		postsReady: handle.ready(),
		liked_posts: Meteor.collection('posts').find({ post_likes: Meteor.userId() }, { sort: { created: -1 } }),
	};
}, ProfileContainer);
