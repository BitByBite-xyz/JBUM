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

import QuestionPanel from '../../components/QuestionPanel';
import Loading from '../../components/Loading';
import AskHeader from '../../components/AskHeader';
import Notifications from '../../components/Notifications';

import styles from './styles';

class Home extends Component {
  /*static navigationOptions = {
    headerRight: ({ navigation }) => <Notifications navigation={navigation} />,
  };*/
  static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <Button title="S" onPress={() => null} />
        };
  };
  constructor(props) {
    super(props);

    this.mounted = false;
    //this.props.navigation.navigate('AccountSetup');
  }

  componentWillMount() {
    this.mounted = true;
    //this.props.navigation.navigate('Inbox')
  }

  componentDidMount() {
  }

  onAskPress = () => {
    this.props.navigation.navigate('Ask');
    //this.dropdown.alertWithType('error', 'Error','dd')
  }

  onClose(data) {//for DropdownAlert
  // data = {type, title, message, action}
  // action means how the alert was dismissed. returns: automatic, programmatic, tap, pan or cancel
  }

  render() {
    const { posts,postsReady,navigation } = this.props;

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
        <AskHeader
          onAskPress={this.onAskPress}
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
              onEndReachedThreshold={0.5}
              removeClippedSubviews={false}
            />

        <DropdownAlert
          ref={(ref) => this.dropdown = ref}
          onClose={(data) => this.onClose(data)}
        />

      </ScrollView>
    );
  }
};

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');

  return {
    posts: Meteor.collection('posts').find({},{ sort: { created: -1 } }),
    postsReady: handle.ready(),
  };
}, Home);
