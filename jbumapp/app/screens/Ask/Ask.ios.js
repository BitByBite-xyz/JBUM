import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity,Picker,Alert,ScrollView, Keyboard } from 'react-native';
import { Icon, Button,CheckBox } from 'react-native-elements'
import update from 'react-addons-update';
import Meteor, { createContainer } from 'react-native-meteor';
import Accordion from 'react-native-collapsible/Accordion';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import Prompt from '../../components/Prompt'
import ActionButton from '../../components/ActionButton';

import styles from './styles'

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      post_visibility:[],
      post_categories:[],
      error: null,
      promptVisible: false,
      otherCategory: 'Other',
      sections: [ {title: '1️⃣ Choose Category '}, {title: '2️⃣ Ask Question '}, {title: '3️⃣ Choose Receiver '}]
    };
  }

  resetFields = () => {
    this.setState( {
      title: '',
      body: '',
      post_visibility:[],
      post_categories:[],
      error: null,
      promptVisible: false,
      otherCategory: 'Other'
    });
  }

  postButton = () => {
    const {title, body,post_visibility, post_categories,otherCategory} = (this.state);
    const { scrollToPage } = this.props;

    if (this.validatePostSubmission()) {
      if (otherCategory !== 'Other') {
        post_categories.push(otherCategory)
      }
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
          this.resetFields();
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

  validatePostSubmission = () => {
    const {title, body,post_visibility, post_categories, otherCategory} = this.state;

    if (!title.replace(/\s/g, '').length) {
      Alert.alert(
        'Oops',
        'You need have a question title!'
      );
      return false;
    }
    if (!body.replace(/\s/g, '').length) {
      Alert.alert(
        'Oops',
        'You need to fill out your question!'
      );
      return false;
    }
    if (title.length > 300) {
      Alert.alert(
        'Oops',
        'Your question title is too long!'
      );
      return false;
    }
    if (body.length > 1000) {
      Alert.alert(
        'Oops',
        'Your question is too long!'
      );
      return false;
    }
    if (title.length === 0 || body.length === 0 || post_visibility.length === 0 || (post_categories.length === 0 && otherCategory === 'Other')){
      Alert.alert(
        'Oops',
        'You forgot to fill everything out!'
      );
      return false;
    }
    return true;
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
  }

  updateCategory = (catOption) => {
    const { post_categories } = this.state;
    const index = post_categories.indexOf(catOption);

    if (index === -1) {
      const newArray = [ ...post_categories, catOption];
      this.setState({ post_categories: newArray});
    }
    else {
      this.setState({
        post_categories: update(this.state.post_categories, {$splice: [[index, 1]]})
      })
    }
  }

  renderHeader = (section) => {
    if (!section.title) return;
    if (section.title.includes('Receiver')){
      return (
        <View style={{backgroundColor: 'white',}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headerText}>{section.title}</Text> 
            <View style={{marginTop: 6, marginLeft: 15}}>
              <Icon
                name='help'
                onPress={() => alert("This will connect you with ..")}
                size={22}
                underlayColor={'white'}
                color={'grey'}
              />
            </View>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.bottom}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent = (section) => {
    const { post_visibility, post_categories, otherCategory} = this.state;

    if (!section.title) return;
    if (section.title.includes('Receiver')) {
      return (
        <View style={{}}>
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 5, paddingBottom: 5}}
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
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 5, paddingBottom: 5}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Adult'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={post_visibility.indexOf('Adult') !== -1}
            onPress={() => {
              this.updateResponder('Adult');
            }}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 5, paddingBottom: 9}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Professional'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='red'
            checked={post_visibility.indexOf('Professional') !== -1}
            onPress={() => {
              this.updateResponder('Professional');
            }}
          />
        </View>
      );
    }
    if (section.title.includes('Category')) {
      const data = ['Relationships (family, friends, etc.)','Success (school, sports, work)','Identity (religion, discrimination, body image)','Abuse (physical, emotional, psychological)','Health Issues (mental, physical, emotional)','Substances (medications, drugs, alcohol, etc.)']
      return (
        <View style={styles.content}>
          {data.map( (cat) => (
            <CheckBox
              style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
              textStyle={styles.optionsText}
              checkedColor={'#24BEE4'}
              title={cat}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={post_categories.indexOf(cat) !== -1}
              onPress={() => {
                this.updateCategory(cat);
              }}
            />
          ))}
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={styles.optionsText}
            checkedColor={'#24BEE4'}
            title={otherCategory}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={otherCategory !== 'Other'}
            onPress={() => {
              if (otherCategory === 'Other') {
                this.setState({promptVisible: true})
              }
              else {
                this.setState({otherCategory: 'Other'})
              }
            }}
          />
        </View>
      );
    }
    if (section.title.includes('Ask')) {
      const title = this.state.title;
      const body = this.state.body;
      return (
        <View style={{ backgroundColor: 'white'}}>
        <View style={styles.views}>
              <AutoGrowingTextInput
                  style={styles.largeText}
                  placeholder='Your Question&#39;s Title'
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={(title) => this.setState({ title })}
                  autoCorrect={true}
                  placeholderTextColor={'#c9c9c9'}
                  minHeight={45}
                  maxLength={300}
                  blurOnSubmit={true}
                  value={title}
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
                  value={body}
                  minHeight={75}
                />
              </View>
              </View>
       
      );
    }

    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  onAccordianChange = () => {
    const {title, body,post_visibility, post_categories, otherCategory} = this.state;
    Keyboard.dismiss;


    this.setState({sections: [ {title: post_categories.length === 0 ? '1️⃣ Choose Category ': '✅ Choose Category '}, 
                                {title: !title.replace(/\s/g, '').length || !body.replace(/\s/g, '').length ?  '2️⃣ Ask Question ': '✅ Ask Question '},
                                {title: post_visibility.length === 0 ? '3️⃣ Choose Receiver ': '✅ Choose Receiver '}]});
  }

  render() {
    const title = this.state.title;
    const body = this.state.body;

    return (
      <ScrollView
        //contentContainerStyle={{backgroundColor: '#57C2D7'}}
        style={styles.backdrop}
        keyboardShouldPersistTaps={'always'}
      >
      <View style={{height: 50, backgroundColor: '#57C2D7', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, fontFamily: 'Avenir', fontWeight: '500', color: 'white'}}>Ask a Question</Text>
      </View>
      <View style={styles.backdrop}>
        <View style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden', backgroundColor: '#F3F3F3'}}>
          <View style={styles.bottomBox}>
            <View style={styles.bottom}>
            <View style={{padding: 10, backgroundColor: 'white', borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
              <View style={{backgroundColor:'#F3F3F3', overflow: 'hidden'}}>
                <Accordion
                  sections={this.state.sections}
                  renderHeader={this.renderHeader}
                  renderContent={this.renderContent}
                  touchableProps={{activeOpacity:1}}
                  initiallyActiveSection={0}
                  onChange={this.onAccordianChange}
                  initiallyActiveSection={0}
                />
              </View>
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
          <Prompt
            title="Type in your Question's Category"
            placeholder="Your new category"
            visible={ this.state.promptVisible }
            onCancel={ () => this.setState({
              promptVisible: false,
              otherCategory: 'Other'
            }) }
            onSubmit={ (value) => this.setState({
              promptVisible: false,
              otherCategory: value
            }) }
          />
        </View>
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
