import React, { Component } from 'react';
import { Animated } from 'react-native';

import PropTypes from 'prop-types';

class AnimateIn extends Component {
  render() {
    return (
      <Animated.View>
        {this.props.children}
      </Animated.View>
    );
  }
}

AnimateIn.propTypes = {
  children: PropTypes.any,
}

export default AnimateIn;
