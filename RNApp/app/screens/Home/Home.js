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
  const { posts } = props;


  return (
    <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
    >
    <AskHeader/>

      {posts.map((post) => (

        <QuestionPanel
          title={post.title}
          body={post.body}
        />
      ))}

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
