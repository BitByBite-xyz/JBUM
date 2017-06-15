import React, { PropTypes } from 'react';

import Meteor, { createContainer } from 'react-native-meteor';


import Home from './Home';

const HomeContainer = ({ posts }) => {
  return (
    <Home
      posts={posts}
    />
  );
};

HomeContainer.propTypes = {
  posts: PropTypes.array,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('posts-list');

  return {
    posts: Meteor.collection('posts').find(),
  };
}, HomeContainer);
