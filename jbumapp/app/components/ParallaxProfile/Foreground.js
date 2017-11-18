/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Icon, Divider } from 'react-native-elements'
import ReactNativeHaptic from 'react-native-haptic';

const header = 'It is Foreground Component';
import * as Progress from 'react-native-progress';

import {IS_X} from '../../config/styles';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  gotoSettings = () => {
    const { navigate } = this.props.navigation;
    navigate('Settings')
  }

  render() {
    const { QuestionNumber, AnsweredNumber, Karma, Level,Name } = this.props;
    styles = {
      info: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 5
      },
      info2: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          bottom: 5
        },
      text: {
        color: 'white',
        fontFamily: 'Avenir',
        backgroundColor: 'transparent',
        marginTop: 10,
        fontSize: 18,
        letterSpacing: 2,
        alignSelf: 'center'
      },
        text2: {
            color: 'white',
          fontFamily: 'Avenir-Heavy',
          backgroundColor: 'transparent',
          marginTop: 10,
          fontSize: 20,
          letterSpacing: 2,
            alignSelf: 'center'
      },
        text3: {
          color: 'white',
          fontFamily: 'Avenir-Light',
          backgroundColor: 'transparent',
          fontSize: 15,
          alignSelf: 'center'
        },
        levelView: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 7,
        },
        progressBar: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        paddingBottom: 23
      },
    };
    return (
      <View style={{flex:1}}>
       
       <View style={{marginLeft: IS_X ? '74%': '85%', marginTop: IS_X? 5: 15}}>
          <Icon
            name='more-horiz'
            large
            onPress={() => {
              if (Platform.OS === 'ios')
                ReactNativeHaptic.generate('selection');this.props.navigation.navigate('Settings')
            }}
            size={28}
            underlayColor={'transparent'}
            color={'white'}
          />

    </View>



          <View style={styles.info}>
            <Text style={styles.text2}>{QuestionNumber}</Text>
            <Text style={styles.text2}>{AnsweredNumber}</Text>
            <Text style={styles.text2}>{Karma}</Text>
          </View>
          <View style={styles.info2}>
            <Text style={styles.text3}>Questions</Text>
            <Text style={styles.text3}>Answered</Text>
            <Text style={styles.text3}>My Growth</Text>
        </View>
          <View style={styles.levelView}>
            <Text style={styles.text}>Level </Text>
            <Text style={styles.text}>{Level}</Text>
          </View>
          <View style={styles.progressBar}>
            <Progress.Bar
                progress={(Karma % 10)*.1}
                width={200}
                color={'white'}
              />
          </View>
            </View>
    );
  }
}
