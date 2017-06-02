import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import Panel from 'react-native-panel';


const QuesionPanel = (props) => {
  const { title, body } = props;
  return (
    <Panel
      style={styles.headerContainer}
      header={title}
    >

      <Text style={styles.myDescription}>
        {body}
      </Text>

    </Panel>
  );
};

QuesionPanel.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,

  onPress: React.PropTypes.func,
};

export default QuesionPanel;
