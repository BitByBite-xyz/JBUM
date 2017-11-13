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
import DropdownAlert from 'react-native-dropdownalert'

import styles from './styles';
import QuestionPanel from '../../components/QuestionPanel';
import AlertPanel from '../../components/AlertPanel';
import InboxPanel from '../../components/InboxPanel';
import Loading from '../../components/Loading';
import FadeInView from '../../components/FadeInView';
import SwipeHiddenHeader from '../../components/SwipeHiddenHeader';

import {queryConstructor} from '../../lib/queryHelpers';
import { changeNotificationNumber } from '../../actions/notification';
import { IS_X } from '../../config/styles';

const ARCHIVED_KEY = 'Archived'
class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedReplies: null,
      numberOfNotificatons:0,
      data:{}
    }
  }
  componentDidMount(){
    const { numberOfNotificatons } = this.state;
    AsyncStorage.getItem(ARCHIVED_KEY).then((archivedObj)=>{
      let archived = JSON.parse(archivedObj);
      archived = (archived)? archived:{};
      this.setState({archivedReplies: archived});
    }).catch((err) => {
      this.setState({archivedReplies: {}});
    })
  }

  componentDidUpdate(prevProps, prevState){
    this.changeNotificationNum()
  }

  changeNotificationNum = () => {
    const {archivedReplies, numOfReplies, numberOfNotificatons} = this.state;
    const { user_posts,updateInboxPosts } = this.props;
    let comments = [];

    if (user_posts && archivedReplies) {
      user_posts.map((item) => {
        const post = item;
        item.post_comments.map((item) => {
          if (archivedReplies[item.comment_id] !== 'archived' &&
              item.user_id !== Meteor.userId()) {
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
    this.props.navigation.dispatch(changeNotificationNumber(comments.length))
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
      return <View style={{height:'10000%'}}/>;
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
    const {archivedReplies, numOfReplies, numberOfNotificatons} = this.state;
    const { user_posts,updateInboxPosts } = this.props;
    let comments = [];

    if (user_posts && archivedReplies) {
      user_posts.map((item) => {
        const post = item;
        item.post_comments.map((item) => {
          if (archivedReplies[item.comment_id] !== 'archived' &&
              item.user_id !== Meteor.userId()) {
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
    if (!item) return;
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
      <SwipeHiddenHeader header={()=>
        <View style={{height: IS_X ? 70 : 50, backgroundColor: '#5CC2D6', alignItems: 'center', borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}>
        <View style={{margin: IS_X ? 12:0}}/>
        <Text style={{fontSize: 23, fontFamily: 'Avenir', color: 'white', fontWeight: '500', marginBottom: 9, marginTop: 10}}>Inbox</Text>
        <View style={{borderBottomLeftRadius: 12, borderTopRightRadius: 12,overflow: 'hidden', backgroundColor: '#F3F3F3'}}/>
        </View>
      }
          style={{backgroundColor: '#F3F3F3'}}
          startHiddenHeaderOffset={230}
      >  
      { archivedReplies && data.length > 0?
        <FlatList
          onPanResponderTerminationRequest={false}
          data={data}
          keyExtractor={(item, index) => item.commentId}
          renderItem={({item}) => this.renderRow(item)}
          ListFooterComponent={this.renderFooter}
          removeClippedSubviews={false}
          initialNumToRender={100}
          style={{ flexGrow: 1}}/> :
          <AlertPanel
            contentText={'You don\'t have any replies!'} />
      }
      </SwipeHiddenHeader>
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
