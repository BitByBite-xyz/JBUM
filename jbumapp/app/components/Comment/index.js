import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment';

export const Comment = (props) => {
  const { postComment } = props;
  
  return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={styles.text}>{postComment.comment_body}</Text>
          </Text>
          <Text style={[styles.text, styles.created]}>{postComment.createdAt?moment(postComment.createdAt).fromNow():'Only the owner of this post can view the replies.'}</Text>
        </View>
      </View>
    );
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
