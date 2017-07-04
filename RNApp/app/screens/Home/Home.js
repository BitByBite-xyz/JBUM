import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Meteor, { MeteorListView } from 'react-native-meteor';

import styles from './styles';

import QuestionPanel from '../../components/QuestionPanel';

import AskHeader from '../../components/AskHeader';

const Home = (props) => {
  const { posts, onAskPress } = props;



  return (
    <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
    >
      <AskHeader
        onAskPress={onAskPress}
        {...this.state}

      />

      {posts.map((post) => (
        <QuestionPanel
          title={post.post_title}
          body={post.post_body}
        />
      ))}
      <QuestionPanel
        title={"header af"}
        body={"body plody plody plody plody plody plody plody plody plody plody pls"}
      />

    </ScrollView>
  );
};

Home.propTypes = {
  posts: PropTypes.array,
};

Home.defaultProps = {
  posts: [],
};

export default Home;
