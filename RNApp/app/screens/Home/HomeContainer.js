import React, { Component } from 'react';
import Home from './Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

  };

  componentWillMount() {
    //this.props.navigation.navigate('Profile');
    this.mounted = true;
  }

  render() {
    return (
      <Home
      />
  );
}};

export default HomeContainer;
