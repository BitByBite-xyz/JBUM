import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native';
import Meteor, { MeteorListView } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}


import styles from './styles';

import QuestionPanel from '../../components/QuestionPanel';
import Loading from '../../components/Loading';

import AskHeader from '../../components/AskHeader';


const Home = (props) => {
  const { posts, onAskPress,navigation,postsReady } = props;

  renderFooter = () => {
    if (postsReady) return null;

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

      <FlatList
        data={posts}
        keyExtractor={(item, index) => item._id}
        renderItem={({item}) =>
          <FadeInView
              duration={700}
          >
            <QuestionPanel
              postContent={item}
              title={item.post_title}
              navigation={navigation}
            />
          </FadeInView>}
          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={50}

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
