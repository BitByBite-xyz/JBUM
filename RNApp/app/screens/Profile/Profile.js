import React, {PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import Button from '../../components/Button';
import styles from './styles';
import Wallpaper from '../../components/Wallpaper';
import images from '../../config/images';
import Icon from 'react-native-vector-icons/Ionicons';





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
				<ScrollableTabView
						renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
					tabBarPosition='overlayTop'
						>
							<Text tabLabel='Tab #1'>My</Text>
							<Text tabLabel='Tab #2'>favorite</Text>
							<Text tabLabel='Tab #3'>project</Text>

						</ScrollableTabView>
    </View>


  );
};

Proflie.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Proflie;
