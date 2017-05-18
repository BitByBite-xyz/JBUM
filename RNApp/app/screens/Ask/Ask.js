import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AskPage from './AskPage.js';
import AnswerPage from './AnswerPage.js';

const Ask = (props) => {
  return (
    <View style={styles.container}>
      <ScrollableTabView style={styles.page}>
           <AskPage styles={styles.page} tabLabel={'Ask'} />
           <AnswerPage style={styles.page} tabLabel={'Answer'} />
      </ScrollableTabView>
    </View>
  );
};

Ask.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Ask;
