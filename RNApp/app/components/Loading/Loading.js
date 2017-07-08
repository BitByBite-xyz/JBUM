import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';

const Loading = (props) => {
  const types = ['CircleFlip', 'Bounce', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid','FadingCircleAlt']
  return (
    <View style={styles.container}>
      <Spinner
        style={styles.spinner}
        //isVisible={this.state.isVisible}
        size={80}
        type={types[Math.floor(Math.random()*types.length)]}
        color={'blue'}
      />
    </View>
  );
};

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
