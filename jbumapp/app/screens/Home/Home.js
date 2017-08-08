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
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Badge } from 'react-native-elements'

import SwipeHiddenHeader from '../../components/SwipeHiddenHeader';
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

  onAskPress = () => {
    this.props.navigation.navigate('Ask');
    //this.dropdown.alertWithType('error', 'Error','dd')
  }

  onClose(data) {//for DropdownAlert
  // data = {type, title, message, action}
  // action means how the alert was dismissed. returns: automatic, programmatic, tap, pan or cancel
  }

  renderHeader = () => (
    <FadeInView
      duration={750}
    >
      <AskHeader
        onAskPress={this.onAskPress}
        {...this.state}
      />
      </FadeInView>
  );

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
      <SwipeHiddenHeader header={()=>
          <View style={styles.header}>
            <View style={styles.centerContainer}>
              <Text style={styles.headerText}>Just Between U and Me</Text>
            </View>
            <View style={{paddingRight:10}}>{/*//i hate this*/}
            <View style={styles.headerRight}>
              <Badge
                containerStyle={{ backgroundColor: '#00abff', height: 32, width: 32}}
                value={3}
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
          />

          <DropdownAlert
            ref={(ref) => this.dropdown = ref}
            onClose={(data) => this.onClose(data)}
          />

      </SwipeHiddenHeader>
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
