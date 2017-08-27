import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';

const Loading = (props) => {
  const types = ['Bounce', 'Pulse', 'ChasingDots', 'ThreeBounce']
  const colors = ['#00B796', '#00D2F1', '#86269B', '#CC0063', '#FE9601']

  return (
    <View style={styles.container}>
      <Spinner
        style={styles.spinner}
        //isVisible={this.state.isVisible}
        size={70}
        type={types[Math.floor(Math.random()*types.length)]}
        color={colors[Math.floor(Math.random()*colors.length)]}
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
