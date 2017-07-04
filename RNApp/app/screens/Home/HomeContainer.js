import React, { PropTypes, Component } from 'react';

import Meteor, { createContainer } from 'react-native-meteor';


import Home from './Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);


    this.mounted = false;

  }

  componentWillMount() {
    this.mounted = true;
  }


  onReplyPress() {
    this.props.navigation.navigate('Ask');

  }

  onAskPress() {
    console.log('Ask');

    this.props.navigation.navigate('Ask');

  }

  render() {
    const { posts } = this.props;
    return (
      <Home
        posts={posts}
        onAskPress={this.onAskPress.bind(this)}
        onReplyPress={this.onReplyPress.bind(this)}
        {...this.state}
      />
    );
  }
};

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');

  /*Meteor.call('Posts.insert', 'i','def', (err) => {
    if (err) {
      return;
    } else {

  });}*/

  return {
    posts: Meteor.collection('posts').find(),
  };
}, HomeContainer);
