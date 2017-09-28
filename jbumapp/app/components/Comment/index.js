import React, { PureComponent, PropTypes } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import moment from 'moment';

import images from '../../config/images';

export default class Comment extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // Pull comment object out of props
    const { postComment } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={styles.text}>{postComment.comment_body}</Text>
          </Text>
          <Text style={[styles.text, styles.created]}>{moment(postComment.createdAt).fromNow()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8
  },
  contentContainer: {
    flex: 1,
    borderColor: '#EEE',
    padding: 5,
  },
  text: {
    color: '#BBB',
    fontFamily: 'Avenir',
    fontSize: 16,
  },
  name: {
    fontWeight: 'bold',
  },
  created: {
    marginTop: 4,
    fontSize: 12,
    color: '#BBB'
  },
});