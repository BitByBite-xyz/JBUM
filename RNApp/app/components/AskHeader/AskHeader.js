import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

class AskHeader extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      question: '',
      description: '',
    });

  }

  render() {
    return (
      <View style={styles.backdrop}>
        <View style={styles.bottomBox}>
          <View style={styles.bottom}>
            <View style={styles.views}>
              <TextInput
                  style={styles.largeText}
                  placeholder='Have a question?'
                  returnKeyType='next'
                  placeholderTextColor='#DBD9D9'
                  underlineColorAndroid='transparent'
                  multiline={true}
                  autoCorrect={false}
                  />
              </View>
            <View style={styles.button}>
            <View style={styles.lineDivider}/>
              <Button fontSize={'12'} color={'#BABABA'} title={'Ask Question'} onPress={this.onPressButton} />
            </View>
          </View>
          <View style={styles.bottomPadding} />
        </View>
      </View>
    );
  }
}
AskHeader.propTypes = {
  navigator: React.PropTypes.object,
};

export default AskHeader;
