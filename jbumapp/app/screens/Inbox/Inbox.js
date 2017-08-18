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

import QuestionPanel from '../../components/QuestionPanel';
import Loading from '../../components/Loading';

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
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <Loading />
      </View>
    );
  };

  renderRow = (item) => {
    const { navigation } = this.props;

    var swipeoutBtns = [
      {
        text: 'Archive',
        backgroundColor:'#24B2FF',
        onPress: () => {
                   this.onArchivePress(item);
                 },
      }
    ]

    return (
      <FadeInView
          duration={700}
      >
        <Swipeout
          right={swipeoutBtns}
          backgroundColor='transparent'
        >
          <QuestionPanel
            postContent={item}
            header={item.post_title}
            navigation={navigation}
          />
        </Swipeout>
      </FadeInView>
    );
  };

  render() {
    const { user_posts,user_postsReady,navigation } = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <FlatList
          data={user_posts}
          keyExtractor={(item, index) => item._id}
          renderItem={({item}) => this.renderRow(item)}
              ListFooterComponent={this.renderFooter}
              onEndReachedThreshold={50}
              removeClippedSubviews={false}
            />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 7,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  },
});

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');

  return {
    user_posts: Meteor.collection('posts').find({ user_id: Meteor.userId(), post_comments: { $gt: 0 }}, { sort: { created: -1 } }),
    user_postsReady: handle.ready(),
  };
}, Inbox);
