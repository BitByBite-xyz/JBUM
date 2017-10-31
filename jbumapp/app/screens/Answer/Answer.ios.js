import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  Animated,
  Alert,
  Modal
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import DropdownAlert from 'react-native-dropdownalert'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Badge,Icon } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';

import SwipeHiddenHeader from '../../components/SwipeHiddenHeader';
import QuestionPanel from '../../components/QuestionPanel';
import AlertPanel from '../../components/AlertPanel';
import Loading from '../../components/Loading';
import AskHeader from '../../components/AskHeader';
import Notifications from '../../components/Notifications';

import {queryConstructor} from '../../lib/queryHelpers';
import {DEVICE_WIDTH} from '../../config/styles';
import styles from './styles';
const calcHeight = (qty) => {
  if (qty < 11) {
    return qty*45;
  }
  console.log(qty)
  return '70%';
}
class Answer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      scrollY: new Animated.Value(0),
      sortValue:'',
      sortIndex:'0',
      modalVisible: false,
      options: ['Default','⏳⏳⏳', '💬💬💬']
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
    const diffCategories = this.state.options;
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

    setTimeout(() => {
      const { posts } = this.props;
      posts.map((post)=> {
        post.post_categories.map((cat)=> {
          if (diffCategories.indexOf(cat) === -1){
            diffCategories.push(cat);
          }
        });
      });
      this.setState({options: diffCategories});
    }, 700);    
  }

  showModal(){
    this.setState({modalVisible: true})
    this.forceUpdate()
  }

  onAskPress = () => {
    //this.modal.show();
    this.props.toAskPage();
    //this.props.navigation.navigate('Ask');
    //this.dropdown.alertWithType('error', 'Error','dd')
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

  getData = () => {
    const { posts } = this.props;
    const { sortIndex, sortValue, options } = this.state;
    const returner = [];

    switch (sortIndex) {
      case '0':
        return posts.sort( (a,b) => {
          return a.post_comments.length - b.post_comments.length;
        });
        break;
      case '1':
        return posts.sort( (a,b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        break;
      case '2':
        return posts.sort( (a,b) => {
          return b.post_comments.length - a.post_comments.length;
        });
        break;
      default:
        posts.map((post)=> {
          if (post.post_categories.indexOf(sortValue) !== -1){
            returner.push(post);
          }
        });
        return returner;
        break;
    }
  }

  onSort = (index,value) => {
    this.setState({sortIndex: index, sortValue: value});
  }


  render() {
    const { posts,loading,navigation,inboxPosts,toInbox,numberOfNotificatons } = this.props;
    const { modalVisible, options } = this.state;
    return (
      <SwipeHiddenHeader header={()=>
        <View>
          <View style={styles.header}>
           <View style={styles.leftContainer}> 
            <ModalDropdown onSelect={(index,value)=>this.onSort(index,value)} 
                           dropdownTextStyle={styles.sortText} ref={(ref) => this.modal = ref} 
                           options={options}
                           dropdownStyle={{height:calcHeight(options.length)}}
            >
            <Icon
              name='sort'
              color='#517fa4'
              onPress={()=> this.modal.show()}
            />
            </ModalDropdown>
            </View>
            <Text style={styles.headerText}>Answer</Text>
            <View style={{paddingRight:10}}>{/*//i hate this*/}
            <View style={styles.headerRight}>
              <Badge
                containerStyle={{ backgroundColor: '#00abff'}}
                value={numberOfNotificatons}
                //onPress={() => this.props.navigation.navigate('Inbox')}
                onPress={toInbox}
                textStyle={{ color: 'white', fontFamily: 'Avenir', fontWeight: '500', fontSize: 15}}
              />
            </View>
            </View>

          </View>
        </View>
        }
          style={{backgroundColor: '#F3F3F3'}}
          startHiddenHeaderOffset={230}
      >
        <StatusBar
          barStyle="light-content"
        />
        {loading ?
          <Loading /> :
          <FlatList
            data={this.getData()}
            keyExtractor={(item, index) => item._id}
            extraData={this.state}
            initialNumToRender={5}
            renderItem={({item}) => (
              <QuestionPanel
                postContent={item}
                header={item.post_title}
                navigation={this.props.navigation}
              />)
            }
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={0.5}
            removeClippedSubviews={false}
          />}
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>
          </View>
          </View>
        </Modal>
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
  const answerTerms = {
    viewName: 'answerPosts',
    limit:50
  }
  const inboxTerms = {
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
