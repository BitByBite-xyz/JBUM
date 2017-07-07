import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import Meteor, { MeteorListView } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}


import styles from './styles';

import QuestionPanel from '../../components/QuestionPanel';

import AskHeader from '../../components/AskHeader';


const Home = (props) => {
  const { posts, onAskPress,navigation } = props;



  return (

    <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
    >
      <StatusBar hidden = {true} />
      <AskHeader
        onAskPress={onAskPress}
        {...this.state}

      />

      {posts.map((post) => (
        <FadeInView
            duration={700}
        >
          <QuestionPanel
            title={post.post_title}
            body={post.post_body}
            navigation={navigation}
          />
        </FadeInView>
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
