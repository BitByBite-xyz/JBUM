import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Panel from 'react-native-panel';
import styles from './styles';

import QuestionPanel from '../../components/QuestionPanel';


const Home = (props) => {
  return (
    <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
    >

      <QuestionPanel
        title="To AccountSetup Screen"
        body='To AccountSetup Screen'
      />

    </ScrollView>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Home;
