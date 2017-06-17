/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

const header = 'It is Foreground Component';
import * as Progress from 'react-native-progress';


export default class Header extends Component {
    constructor(props) {
      super(props);
    }




  render() {
    const { QuestionNumber, AnsweredNumber, Karma, Level,Name } = this.props;
    styles = {
      info: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
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
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 2,
        alignSelf: 'center'
      },
        text2: {
            color: 'white',
          fontFamily: 'Avenir-Heavy',
          backgroundColor: 'transparent',
          marginTop: 20,
          fontSize: 18,
          letterSpacing: 2,
            alignSelf: 'center'
      },
        text3: {
          color: 'white',
          fontFamily: 'Avenir-Light',
          backgroundColor: 'transparent',
          fontSize: 12,
          alignSelf: 'center'
        },
        levelView: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        },
        progressBar: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        paddingBottom: 23
      },
    };
    return (
      <View style={styles.container}>

      <Text style={styles.text}>{Name}</Text>



          <View style={styles.info}>
            <Text style={styles.text2}>{QuestionNumber}</Text>
            <Text style={styles.text2}>{AnsweredNumber}</Text>
            <Text style={styles.text2}>{Karma}</Text>
          </View>
          <View style={styles.info2}>
            <Text style={styles.text3}>Questions</Text>
            <Text style={styles.text3}>Answered  </Text>
            <Text style={styles.text3}>Karma   </Text>
        </View>
          <View style={styles.levelView}>
            <Text style={styles.text}>Level </Text>
            <Text style={styles.text}>{Level}</Text>
          </View>
          <View style={styles.progressBar}>
            <Progress.Bar
                progress={0.3}
                width={200}
                color={'white'}
              />
          </View>
            </View>
    );
  }
}
