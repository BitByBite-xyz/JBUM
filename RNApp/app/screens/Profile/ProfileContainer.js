import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import Profile from './Profile';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
  }


  render() {
		const { posts } = this.props;
    return (
      <Profile
				posts={posts}
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
    posts: Meteor.collection('posts').find({},{ sort: { created: -1 } })
  };
}, ProfileContainer);
