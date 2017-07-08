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

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import FadeInView from 'react-native-fade-in-view';
import QuestionPanel from '../../components/QuestionPanel';
import Loading from '../../components/Loading';

import Button from '../../components/Button';
import styles from './styles';
import images from '../../config/images';
import Icon from 'react-native-vector-icons/Ionicons';

import Foreground, { Background, } from '../../components/ParallaxProfile';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';


const Proflie = (props) => {
  const { QuestionNumber,
					AnsweredNumber,
					Karma,
					Level,
					navigation } = props;

	const { user_posts,responded_posts,liked_posts,postsReady } = props;

	const foreground = (
	  <Foreground
			QuestionNumber={user_posts.length}
			AnsweredNumber={responded_posts.length}
			Karma='84'
			Level='7'
		/>
	);
	const background = (
	  <Background source={images.profileBannerImg} />
	);
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

		<ParallaxScroll

			parallaxHeight={225}
	      isBackgroundScalable={true}
	      renderParallaxBackground={() => background}
				renderParallaxForeground={() => foreground}

	      fadeOutParallaxBackground={true}
				fadeOutParallaxForeground={true}

	      parallaxBackgroundScrollSpeed={5}


	>
		<StatusBar hidden = {true}/>




			<ScrollableTabView
					renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
					>
					<FlatList
						tabLabel='My Posts'
		        data={user_posts}
		        keyExtractor={(item, index) => item._id}
		        renderItem={({item}) =>
		          <FadeInView
		              duration={700}
		          >
		            <QuestionPanel
		              postContent={item}
		              title={item.post_title}
		              navigation={navigation}
		            />
		          </FadeInView>}
							ListFooterComponent={this.renderFooter}
			        onEndReachedThreshold={50}
		        />

						<FlatList
							tabLabel='Liked'
							data={liked_posts}
							keyExtractor={(item, index) => item._id}
							renderItem={({item}) =>
								<FadeInView
										duration={700}
								>
									<QuestionPanel
										postContent={item}
										title={item.post_title}
										navigation={navigation}
									/>
								</FadeInView>}
							ListFooterComponent={this.renderFooter}
			        onEndReachedThreshold={50}
							/>

							<FlatList
								tabLabel='Answered'
								data={responded_posts}
								keyExtractor={(item, index) => item._id}
								renderItem={({item}) =>
									<FadeInView
											duration={700}
									>
										<QuestionPanel
											postContent={item}
											title={item.post_title}
											navigation={navigation}
										/>
									</FadeInView>}
									ListFooterComponent={this.renderFooter}
					        onEndReachedThreshold={50}
								/>

					</ScrollableTabView>

		</ParallaxScroll>

  );
};

Proflie.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Proflie;
