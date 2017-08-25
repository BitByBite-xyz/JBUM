import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity,Picker,Alert,ScrollView } from 'react-native';
import { Button,CheckBox } from 'react-native-elements'
import update from 'react-addons-update';

import Meteor, { createContainer } from 'react-native-meteor';
import Accordion from 'react-native-collapsible/Accordion';

import styles from './styles'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const SECTIONS = [
  {
    title: ' Reciever ',
  },
  {
    title: ' Category ',
  }
];

class Ask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      post_visibility:[],
      post_categories:[],
      error: null,
    };
  }

  postButton = () => {
    const {title, body,post_visibility, post_categories} = (this.state);
    const { scrollToPage } = this.props;

    if (title.length === 0 || body.length === 0 || post_visibility.length === 0 || post_categories.length === 0){
      Alert.alert(
        'Oops',
        'You forgot to fill everything out!'
      );
    }
    else {
      const params = {
        title:title,
        body: body,
        post_visibility:post_visibility,
        post_categories:post_categories
      }
      Meteor.call('Posts.insert', params, (err) => {
        if (err) {
          console.log("Post err"+err.details);
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
          return;
        } else {
          console.log("Post added");

          if (scrollToPage) {
            scrollToPage();
          }
          else {
            this.props.navigation.goBack();
          }
        }
      });
    }
  }

  updateResponder = (visOption) => {
    const { post_visibility } = this.state;
    const index = post_visibility.indexOf(visOption);

    if (post_visibility.indexOf(visOption) === -1) {
      const newArray = [ ...post_visibility, visOption];
      this.setState({ post_visibility: newArray});
    }
    else {
      this.setState({
        post_visibility: update(this.state.post_visibility, {$splice: [[index, 1]]})
      })
    }
    console.log(post_visibility);

  }

  updateCategory = (catOption) => {
    const { post_categories } = this.state;
    const index = post_categories.indexOf(catOption);
    console.log(index);


    if (index === -1) {
      const newArray = [ ...post_categories, catOption];
      this.setState({ post_categories: newArray});
    }
    else {
      this.setState({
        post_categories: update(this.state.post_categories, {$splice: [[index, 1]]})
      })
    }
    console.log(post_categories);
  }

  renderHeader = (section) => {
    return (
      <View style={styles.bottom}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent = (section) => {
    const { post_visibility, post_categories} = this.state;

    if (section.title.includes('Reciever')) {
      return (
        <View style={styles.content}>
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 5}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Student'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_visibility.indexOf('Student') !== -1}
            onPress={() => {
              this.updateResponder('Student');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 8}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Professional'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_visibility.indexOf('Professional') !== -1}
            onPress={() => {
              this.updateResponder('Professional');
            }}
          />
        </View>
      );

    }
    if (section.title.includes('Category')) {
      return (
        <View style={styles.content}>
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 5}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Friends'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_categories.indexOf('Friends') !== -1}
            onPress={() => {
              this.updateCategory('Friends');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Family'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_categories.indexOf('Family') !== -1}
            onPress={() => {
              this.updateCategory('Family');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Relationships'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_categories.indexOf('Relationships') !== -1}
            onPress={() => {
              this.updateCategory('Relationships');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Bullying'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_categories.indexOf('Bullying') !== -1}
            onPress={() => {
              this.updateCategory('Bullying');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Drugs'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_categories.indexOf('Drugs') !== -1}
            onPress={() => {
              this.updateCategory('Drugs');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Sexuality'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            checked={post_categories.indexOf('Sexuality') !== -1}
            onPress={() => {
              this.updateCategory('Sexuality');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Other'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_categories.indexOf('Other') !== -1}
            onPress={() => {
              this.updateCategory('Other');
            }}
          />
        </View>
      );

    }

    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    const title = this.state.title;
    const body = this.state.body;

    return (
      <ScrollView style={styles.backdrop}>
      <View style={styles.backdrop}>
        <View style={styles.bottomBox}>
          <View style={styles.bottom}>
            <View style={styles.views}>
              <AutoGrowingTextInput
                  style={styles.largeText}
                  placeholder='Your Question&#39;s Title'
                  returnKeyType='next'
                  underlineColorAndroid='transparent'
                  onChangeText={(title) => this.setState({ title })}
                  autoCorrect={true}
                  placeholderTextColor={'#c9c9c9'}
                  minHeight={45}
                  />
                  <View style={styles.lineDivider} />
            </View>
            <View style={styles.views}>
              <AutoGrowingTextInput
                  style={styles.smallText}
                  placeholder='Tell us your question...'
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={(body) => this.setState({ body })}
                  multiline={true}
                  blurOnSubmit={true}
                  placeholderTextColor={'#c9c9c9'}
                  autoCorrect={true}
                  minHeight={75}
                  />
              </View>
          </View>
          <View style={{padding: 10, backgroundColor: 'white', borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
            <View style={{backgroundColor:'#F3F3F3', borderRadius: 10}}>
              <Accordion
                sections={SECTIONS}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                touchableProps={{activeOpacity:1}}
              />
            </View>
          </View>


          <Button
            borderRadius={25}
            containerViewStyle={{marginTop:10, paddingBottom: 20}}
            backgroundColor={'white'}
            //disabled={title.length !== 0 && body.length !== 0}
            icon={{name: 'send', color: '#BBB', size: 20}}
            iconRight
            title='Submit Question'
            textStyle={{color:'#BBB', fontFamily: 'Avenir', fontSize: 22, fontWeight: '500'}}
            onPress={() => this.postButton()}/>
        </View>
      </View>
    </ScrollView>
    );
  }
}
Ask.propTypes = {
  navigator: React.PropTypes.object,
  title: React.PropTypes.string,
  body: React.PropTypes.string
};

export default Ask;
