import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//https://github.com/dwicao/react-native-panel
import Panel from './Panel';
//https://github.com/dancormier/react-native-swipeout
import Swipeout from 'react-native-swipeout';

import styles from './styles';


const QuesionPanel = (props) => {
  const { title, body, loveCounter, responseCounter,navigation } = props;

  var swipeoutBtns = [
    {
      text: 'Report',
      backgroundColor: 'red',
    //   onPress: onPress
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
        body={body}
        navigation={navigation}
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
  loveCounter: React.PropTypes.string,
  responseCounter: React.PropTypes.string,
  onReplyPress: React.PropTypes.func,
};

export default QuesionPanel;
