import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  AsyncStorage
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import DropdownAlert from 'react-native-dropdownalert'
import Swipeout from 'react-native-swipeout';

import styles from './styles';
import QuestionPanel from '../../components/QuestionPanel';
import AlertPanel from '../../components/AlertPanel';
import InboxPanel from '../../components/InboxPanel';
import Loading from '../../components/Loading';
import {queryConstructor} from '../../lib/queryHelpers';

const ARCHIVED_KEY = 'Archived'
class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedReplies: null
    }
  }
  componentDidMount(){
    //AsyncStorage.clear();
    AsyncStorage.getItem(ARCHIVED_KEY).then((archivedObj)=>{
      let archived = JSON.parse(archivedObj);
      archived = (archived)? archived:{};
      this.setState({archivedReplies: archived});
    }).catch((err) => {
      this.setState({archivedReplies: {}});
    })
  }


  onArchivePress = (item) => {
    const {archivedReplies} = this.state;
    archivedReplies[item]  = 'archived';

    AsyncStorage.setItem(ARCHIVED_KEY, JSON.stringify(archivedReplies)).then(
      AsyncStorage.getItem(ARCHIVED_KEY).then((archivedObj)=>{
        let archived = JSON.parse(archivedObj);
        archived = (archived)? archived:{};

        this.setState({archivedReplies: archived});
      }).catch((err) => {
        console.log(err);
      })
    )
  }

  renderFooter = () => {
    if (this.props.user_posts.length === 0 ) {
      return (
        <View
          style={styles.loading}
        >
          <AlertPanel
            contentText={'You don\'t have any replies!'} />
        </View>
      )
    }
    if (this.props.user_postsReady) {
      return null;
    }

    return (
      <View
        style={styles.loading}
      >
        <Loading />
      </View>
    );
  }

  findMostRecentReplies = () => {
    const {archivedReplies, numOfReplies} = this.state;
    const { user_posts,updateInboxPosts } = this.props;
    let comments = [];

    if (user_posts && archivedReplies) {
      user_posts.map((item) => {
        const post = item;
        item.post_comments.map((item) => {
          if (archivedReplies[item.comment_id] !== 'archived') {
            const comment = {
              commentBody: item.comment_body,
              commentId: item.comment_id,
              createdAt: item.createdAt,
              post:post
            };
            comments.push(comment)
          }
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
            createdAt={item.createdAt}
            post={item.post}
            commentId={item.commentId}
            navigation={this.props.navigation}
            onArchivePress={this.onArchivePress.bind(this)}
          />
    );
  }

  renderArchiveHack = () => {
    return (
      <AlertPanel
        contentText={'You don\'t have ancy replies!'} />
    )
  }

  render() {
    const { archivedReplies } = this.state;
    const { user_posts,user_postsReady,navigation } = this.props;
    const data = this.findMostRecentReplies();
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={{backgroundColor: '#5CC2D6', alignItems: 'center'}}>
          <Text style={{fontSize: 23, fontFamily: 'Avenir', color: 'white', fontWeight: '500', marginBottom: 9, marginTop: 10}}>Inbox</Text>
          <View style={{borderTopLeftRadius: 12, borderTopRightRadius: 12,overflow: 'hidden', backgroundColor: '#F3F3F3'}}>
            { archivedReplies && data.length > 0?
              <FlatList
                data={data}
                keyExtractor={(item, index) => item.commentBody}
                renderItem={({item}) => this.renderRow(item)}
                ListFooterComponent={this.renderFooter}
                onEndReachedThreshold={50}
                removeClippedSubviews={false}/>:
                <AlertPanel
                  contentText={'You don\'t have any replies!'} />
            }

              </View>
              </View>
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
