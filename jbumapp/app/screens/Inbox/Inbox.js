import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import DropdownAlert from 'react-native-dropdownalert'
import Swipeout from 'react-native-swipeout';

import styles from './styles';
import QuestionPanel from '../../components/QuestionPanel';
import InboxPanel from '../../components/InboxPanel';
import Loading from '../../components/Loading';
import {queryConstructor} from '../../lib/queryHelpers';

class Inbox extends Component {
  constructor(props) {
    super(props);
  }

  onArchivePress(item) {
    console.log(item);

    Meteor.call('Posts.archive', item._id);
  }

  renderFooter = () => {
    if (this.props.user_postsReady) return null;

    return (
      <View
        style={styles.loading}
      >
        <Loading />
      </View>
    );
  }

  findMostRecentReplies = () => {
    const { user_posts } = this.props;
    let comments = [];

    if (user_posts) {
      user_posts.map((item) => {
        const post = item;
        item.post_comments.map((item) => {
          const comment = {
            commentBody: item.comment_body,
            createdAt: item.createdAt,
            post:post
          };
          comments.push(comment)
        })
      })
    }
    comments.sort((a,b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    return comments;
  }

  renderRow = (item) => {
    const { navigation } = this.props;

    return (
          <InboxPanel
            commentBody={item.commentBody}
          />

    );
  }

  render() {
    const { user_posts,user_postsReady,navigation } = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={{backgroundColor: '#5CC2D6', paddingTop: -10, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, alignItems: 'center'}}>
          <Text style={{fontSize: 23, fontFamily: 'Avenir', color: 'white', fontWeight: '500', marginBottom: 9, marginTop: 2}}>Inbox</Text>
          <View style={{borderRadius: 10, overflow: 'hidden', backgroundColor: '#F3F3F3'}}>
            </View>

            </View>
            <FlatList
              data={this.findMostRecentReplies()}
              keyExtractor={(item, index) => item.commentBody}
              renderItem={({item}) => this.renderRow(item)}
                  ListFooterComponent={this.renderFooter}
                  onEndReachedThreshold={50}
                  removeClippedSubviews={false}
                />
      </ScrollView>
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');

  var terms = {
    viewName: 'inboxPosts',
    limit: 50
  }
  var parameters = queryConstructor(terms);

  return {
    user_posts: Meteor.collection('posts').find(parameters.find, parameters.sort),
    user_postsReady: handle.ready(),
  };
}, Inbox);
