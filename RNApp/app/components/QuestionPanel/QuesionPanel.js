import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import Panel from 'react-native-panel';

import Swipeout from 'react-native-swipeout';

// Buttons


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
