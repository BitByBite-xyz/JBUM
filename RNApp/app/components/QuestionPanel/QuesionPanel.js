import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//https://github.com/dwicao/react-native-panel
import Panel from 'react-native-panel';
//https://github.com/dancormier/react-native-swipeout
import Swipeout from 'react-native-swipeout';

import styles from './styles';


const QuesionPanel = (props) => {
  const { title, body,onPress } = props;

  var swipeoutBtns = [
    {
      text: 'Report',
      backgroundColor: 'red',
      onPress: onPress
    }
  ]
  return (


  <Swipeout
    right={swipeoutBtns}
    backgroundColor='transparent'
    >
      <Panel
        style={styles.headerContainer}
        header={title}
        onPress={onPress}
      >
        <Text style={styles.myDescription}>
          {body}
        </Text>
    </Panel>
  </Swipeout>
  );
};

QuesionPanel.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,

  onPress: React.PropTypes.func,
};

export default QuesionPanel;
