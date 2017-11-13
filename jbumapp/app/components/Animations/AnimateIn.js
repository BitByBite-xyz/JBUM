import React, { Component } from 'react';
import { Animated } from 'react-native';

class AnimateIn extends Component {
  render() {
    return (
      <Animated.View>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimateIn;
