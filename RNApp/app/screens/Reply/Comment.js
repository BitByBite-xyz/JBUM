import React, { PureComponent, PropTypes } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment';

import images from '../../config/images';


export default class Comment extends PureComponent {

  constructor(props) {

    super(props);



  }

  render() {
    // Pull comment object out of props
    const { commentContent } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            resizeMode='contain'
            style={styles.avatar}
            source={images.loved}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={[styles.text, styles.name]}>{commentContent.user_id}</Text>
            {' '}
            <Text style={styles.text}>{commentContent.comment_body}</Text>
          </Text>
          <Text style={[styles.text, styles.created]}>{moment(created).fromNow()}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    marginLeft: 5,
    paddingTop: 10,
    width: 40,
  },
  contentContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    padding: 5,
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 13,
    width: 26,
    height: 26,
  },
  text: {
    color: '#000',
    fontFamily: 'Avenir',
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  created: {
    color: '#BBB',
  },
});
