import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity,Picker,Alert,ScrollView } from 'react-native';
import { Button,CheckBox } from 'react-native-elements'

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
      post_visibility:["Peers"],
      error: null,
      checked:false,
    };
  }

  postButton = () => {
    const {title, body,post_visibility} = (this.state);
    const { scrollToPage } = this.props;

    if (title.length === 0 || body.length === 0){
      Alert.alert(
        'Oops',
        'You forgot to fill everything out!'
      );
    }
    else {
      const params = {
        title:title,
        body: body,
        post_visibility:post_visibility

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
          scrollToPage();

        }
      });
    }


  }

  renderHeader = (section) => {
    return (
      <View style={styles.bottom}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent = (section) => {
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
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Adult'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 8}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Professional'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
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
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Family'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Relationships'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Bullying'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Drugs'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Eating Disorder'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Religion'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Discrimination'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Sexuality'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Sickness'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Abuse'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
          <CheckBox
            style={{backgroundColor: 'white', paddingLeft: 15, paddingTop: 10, paddingBottom: 3}}
            textStyle={{color: '#A4A7A6', fontSize: 16}}
            checkedColor={'#24BEE4'}
            title='Other'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
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
