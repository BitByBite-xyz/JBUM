import React, { Component } from 'react';
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
import DropdownAlert from 'react-native-dropdownalert'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Badge } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import SwipeHiddenHeader from '../../components/SwipeHiddenHeader';
import QuestionPanel from '../../components/QuestionPanel';
import AlertPanel from '../../components/AlertPanel';
import Loading from '../../components/Loading';
import AskHeader from '../../components/AskHeader';
import Notifications from '../../components/Notifications';
import FadeInView from '../../components/FadeInView';//{/* onFadeComplete={() => alert('Ready') */}


import {queryConstructor} from '../../lib/queryHelpers';
import styles from './styles';
import { getInitialQuote } from '../../actions/quote';

class Answer extends Component {
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
    const { posts } = this.props;
  }

  componentWillMount() {
    this.props.navigation.dispatch(getInitialQuote());
    this.mounted = true;
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
    const { navigate } = this.props.navigation;
    navigate('Ask')
  }

  onClose(data) {//for DropdownAlert
  // data = {type, title, message, action}
  // action means how the alert was dismissed. returns: automatic, programmatic, tap, pan or cancel
  }

  renderFooter = () => {
    const { loading,posts } = this.props;

    if (loading) {
      return null;
    }
    if (posts.length === 0) {
      return (<AlertPanel
								contentText={'No questions to display. Ask Something!'} />
							)
    }


    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >

      </View>
    );
  };

  toInbox = () => {
    const { navigate } = this.props.navigation;
    navigate('Inbox');
  }

  render() {
    const { posts,loading,navigation,inboxPosts,numberOfNotificatons } = this.props;
    return (
      <SwipeHiddenHeader header={()=>
          <View style={styles.header}>
            <View style={styles.centerContainer}>
              <Text style={styles.headerText}>Just Between U and Me</Text>
            </View>
            <View style={{paddingRight:10}}>{/*//i hate this*/}
            <View style={styles.headerRight}>
              <Badge
                containerStyle={{ backgroundColor: '#00abff'}}
                value={numberOfNotificatons}
                onPress={this.toInbox}
                textStyle={{ color: 'white', fontFamily: 'Avenir', fontWeight: '500', fontSize: 15}}
              />
            </View>
            </View>
          </View>}
          style={{backgroundColor: '#F3F3F3'}}
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
          />}
          <DropdownAlert
            ref={(ref) => this.dropdown = ref}
            onClose={(data) => this.onClose(data)}
          />


      </SwipeHiddenHeader>
    );
  }
};

const mapStateToProps = ( state, ownProps ) => {
    return {
        numberOfNotificatons: state.notification.numberOfNotificatons
    }
}

export default createContainer(() => {
  var answerTerms = {
    viewName: 'answerPosts',
    limit:50
  }
  var inboxTerms = {
    viewName: 'inboxPosts',
    limit:50
  }
  const handle = Meteor.subscribe('Posts.pub.list');
  const loading = !handle.ready();

  var answerParameters = queryConstructor(answerTerms);
  var inboxParameters = queryConstructor(inboxTerms);


  return {
    posts: Meteor.collection('posts').find(answerParameters.find, answerParameters.sort)
  };
}, connect(mapStateToProps)(Answer));
