import React, {PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	FlatList ,
	StatusBar
} from 'react-native';
import * as Progress from 'react-native-progress';

import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Panel from 'react-native-panel';


import Button from '../../components/Button';
import styles from './styles';
import ProfileQuestions from './ProfileQuestions';

import Wallpaper from '../../components/Wallpaper';
import images from '../../config/images';
import Icon from 'react-native-vector-icons/Ionicons';

import Foreground, { Background, } from '../../components/ParallaxProfile';

const bacground = (
  <Background source={images.profileBannerImg} />
);
const bacddground = (
  <Foreground
		QuestionNumber='21'
		AnsweredNumber='12'
		Karma='84'
		Level='7'
	/>
);


const Proflie = (props) => {
  const { QuestionNumber, AnsweredNumber, Karma, Level, posts, navigation } = props;

  return (
    <View style={styles.container}>
			<StatusBar hidden = {true}/>

			<ParallaxScroll
	      parallaxHeight={225}
	      isBackgroundScalable={true}
	      renderParallaxBackground={() => bacground}
				renderParallaxForeground={() => bacddground}

	      fadeOutParallaxBackground={true}
				fadeOutParallaxForeground={true}

	      parallaxBackgroundScrollSpeed={5}
    >

				<ProfileQuestions
				posts={posts}

				/>

		</ParallaxScroll>

    </View>


  );
};

Proflie.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Proflie;
