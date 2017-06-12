import React, { Component } from 'react';

import Meteor from 'react-native-meteor';


import Home from './Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

  };

  componentWillMount() {
    //this.props.navigation.navigate('Profile');
    this.mounted = true;
    Meteor.subscribe('postlist');
  }

  getMeteorData() {
    return {
      posts: Meteor.collection('postlist').findOne()
    };
  }

  renderRow(postslist) {
    return (
      <Text>{posts-list.title}</Text>
    );
  }

  render() {
    return (
      <Home
        renderRow={this.renderRow.bind(this)}
        getMeteorData={this.getMeteorData.bind(this)}
        {...this.state}
      />
  );
}};

export default HomeContainer;
