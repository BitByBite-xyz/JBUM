import React, {PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import * as Progress from 'react-native-progress';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Button from '../../components/Button';
import styles from './styles';
import Wallpaper from '../../components/Wallpaper';
import images from '../../config/images';





const Proflie = (props) => {
  const { QuestionNumber, AnsweredNumber, Karma, Level,Name } = props;

  return (
    <View style={styles.container}>
      <Image style={{
        flex: 1,

        resizeMode: 'cover',
        height: null,
        width: null,
        backgroundColor: ('rgba(52, 52, 52, 1)' : null) // needs to be fixed with gray overlay
      }} source={images.profileBannerImg}>


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
        </Image>
    </View>


  );
};

Proflie.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Proflie;
