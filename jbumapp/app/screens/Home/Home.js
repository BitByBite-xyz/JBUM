import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  Animated,
  Alert
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import DropdownAlert from 'react-native-dropdownalert'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Badge } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';

import SwipeHiddenHeader from '../../components/SwipeHiddenHeader';
import QuestionPanel from '../../components/QuestionPanel';
import Loading from '../../components/Loading';
import AskHeader from '../../components/AskHeader';
import Notifications from '../../components/Notifications';

import {queryConstructor} from '../../lib/queryHelpers';

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
    this.state= {
      scrollY: new Animated.Value(0)
    };

    this.mounted = false;
    //this.props.navigation.navigate('Ask');
    const { posts } = this.props;
  }

  componentWillMount() {
    if (!Meteor.userId()) {
      const resetAction = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: 'WelcomeStack' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }
    this.mounted = true;
    //this.props.navigation.navigate('Inbox')
  }

  componentDidMount(){
    const { navigation } = this.props;
    if (Meteor.userId()) { //this is cancer
      if (Meteor.user().profile) {
        if (!Meteor.user().profile.isAccountSetupComplete) {
          if (navigation.state.params && navigation.state.params.overrideToAccountSetup) {
            return;
          }
          else {
            navigation.navigate('AccountSetup');
          }
        }
      }
      else {
        navigation.navigate('AccountSetup');
      }
    }
  }

  onAskPress = () => {
    this.props.toAskPage();
    //this.props.navigation.navigate('Ask');
    //this.dropdown.alertWithType('error', 'Error','dd')
  }

  onClose(data) {//for DropdownAlert
  // data = {type, title, message, action}
  // action means how the alert was dismissed. returns: automatic, programmatic, tap, pan or cancel
  }

  renderHeader = () => (
    <View
      style={{
        marginTop: 5.55,
      }}
    >
      <AskHeader
        onAskPress={this.props.toAskPage}
        {...this.state}
      />
    </View>

  );

  renderFooter = () => {
    const { loading } = this.props;

    /*if (!loading) {
      return null;
    }*/

    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <Loading />
      </View>
    );
  };

  render() {
    const { posts,loading,navigation,inboxCount } = this.props;
    return (
      <SwipeHiddenHeader header={()=>
          <View style={styles.header}>
            <View style={styles.centerContainer}>
              <Text style={styles.headerText}>Just Between U and Me</Text>
            </View>
            <View style={{paddingRight:10}}>{/*//i hate this*/}
            <View style={styles.headerRight}>
              <Badge
                containerStyle={{ backgroundColor: '#00abff', height: 32, width: 32}}
                value={inboxCount}
                onPress={() => this.props.navigation.navigate('Inbox')}
                textStyle={{ color: 'white', fontFamily: 'Avenir', fontWeight: '500', fontSize: 15}}
              />
            </View>
            </View>
          </View>}
          style={styles.container}
          startHiddenHeaderOffset={230}
      >
        <StatusBar
          barStyle="light-content"
        />

        {loading ?
          <Loading /> :
          <FlatList
            data={posts}
            keyExtractor={(item, index) => item._id}
            extraData={this.state}
            initialNumToRender={5}
            renderItem={({item}) => (

              <QuestionPanel
                postContent={item}
                header={item.post_title}
                navigation={this.props.navigation}
              />)}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={0.5}
            removeClippedSubviews={false}
            ListHeaderComponent={this.renderHeader}
          />}
          <DropdownAlert
            ref={(ref) => this.dropdown = ref}
            onClose={(data) => this.onClose(data)}
          />


      </SwipeHiddenHeader>
    );
  }
};

export default createContainer(() => {


  var homeTerms = {
    viewName: 'homePosts',
    limit:50
  }
  var inboxTerms = {
    viewName: 'inboxPosts',
    limit:50
  }
  const handle = Meteor.subscribe('Posts.pub.list');
  const loading = !handle.ready();

  var homeParameters = queryConstructor(homeTerms);
  var inboxParameters = queryConstructor(inboxTerms);


  return {
    posts: Meteor.collection('posts').find(homeParameters.find, homeParameters.sort),
    inboxCount: Meteor.collection('posts').find(inboxParameters.find).length,

  };
}, Home);
