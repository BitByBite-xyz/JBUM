import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import AskPage from './AskPage.js';

const Ask = (props) => {
  return (
    <View style={styles.container}>
           <AskPage styles={styles.page} tabLabel={'Ask'} />
    </View>
  );
};

Ask.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Ask;
