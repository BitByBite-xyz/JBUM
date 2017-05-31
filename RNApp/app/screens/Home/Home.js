import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Panel from 'react-native-panel';
import styles from './styles';

const Home = (props) => {
  return (
    <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
          >
            <Panel
              style={styles.firstHeaderContainer}
              header={this.renderFirstHeader}
            >
              <Text style={styles.myDescription}>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Text>
            </Panel>
            <Panel
              header="With onPress, yeaahhhh!!! It's so f#cking amazing wooohoooo..."
              onPress={() => alert("It's awesome, right?")}
            >
              <Text style={styles.myDescription}>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </Text>
            </Panel>
            <Panel
              style={styles.thirdHeaderContainer}
              header="Custom container style"
            >
              <Text style={styles.myDescription}>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident.
              </Text>
            </Panel>
            <Panel header="Custom content style">
              <View style={styles.customContent}>
                <View style={styles.square} />
                <View style={styles.circle} />
                <View style={styles.square} />
              </View>
            </Panel>
          </ScrollView>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Home;
