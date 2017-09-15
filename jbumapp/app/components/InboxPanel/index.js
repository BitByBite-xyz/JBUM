import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { Icon, Divider, Badge } from 'react-native-elements'

import styles from './styles';

export default class InboxPanel extends Component {
  handleOnTouch = () => {
    const { navigation } = this.props;
    navigation.navigate("Reply",{ postContent: this.props.post, commentSelected: this.props.commentId });
  }
  render() {
    const { commentBody, createdAt, post, onArchivePress,commentId } = this.props;
    return (
      <TouchableOpacity onPress={this.handleOnTouch} style={styles.container} activeOpacity={0}>
      <View style={styles.questionPanelContainer}>
        <View style={styles.bottom}>
          <Text style={styles.title}>{commentBody}</Text>
          <View style={{marginRight:-12, marginTop: 8}}>
            <Icon
              name='clear'
              color='#517fa4'
              containerStyle={styles.buttonImage}
              onPress={() => onArchivePress(commentId)}
            />
          </View>

        </View>
        <View style={{ marginTop: -7, marginLeft: 17, marginBottom: 2}}>
          <Text style={[styles.timeText, styles.created]}>{' '+moment(createdAt).fromNow()}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Text style={styles.myDescription}>Original Post{/*: {post.post_title}*/}</Text>
          <Icon
            style={{marginBottom: 0, marginTop: 1.3}}
            name='send'
            size={18}
            color='#5CC2D6'
          />
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}
