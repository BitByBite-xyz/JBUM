import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	FlatList ,
	StatusBar
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import FadeInView from 'react-native-fade-in-view';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { ButtonGroup } from 'react-native-elements'

import Loading from '../../components/Loading';
import Foreground, {Background} from '../../components/ParallaxProfile';
import QuestionPanel from '../../components/QuestionPanel';

import styles from './styles';
import images from '../../config/images';
const background = (
	<Background source={images.profileBannerImg} />
);
class ProfileContainer extends Component {

  constructor(props) {
    super(props);
		this.state = {
		  selectedIndex: 0
		}
		this.updateIndex = this.updateIndex.bind(this)
  }

	updateIndex (selectedIndex) {
	  this.setState({selectedIndex})
	}

	renderFooter = () => {
		const { postsReady } = this.props;

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
	}

  render() {
		const { user_posts,responded_posts,postsReady,navigation } = this.props;
		const PARALLAX_HEADER_HEIGHT = 150;
		const buttons = ['My Posts', 'Replied Posts'];
  	const { selectedIndex } = this.state;
		const questionNumber = user_posts.length;
		const answeredNumber = responded_posts.length;
		const karma = Math.floor((questionNumber + answeredNumber)*1.5);


		const foreground = (
		  <Foreground
				QuestionNumber={questionNumber}
				AnsweredNumber={responded_posts.length}
				Karma={karma}
				Level={Math.floor(karma / 10)}
			/>
		);
		return (
			<View style={styles.container}>
				<StatusBar hidden = {true}/>
				<ParallaxScrollView
					style={{ flex: 1, backgroundColor: '#F3F3F3', overflow: 'hidden' }}
					parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
					stickyHeaderHeight={80}
					backgroundSpeed={10}
					onScroll={this.props.onScroll}
					contentBackgroundColor='#F3F3F3'
					renderForeground={() => foreground}
					renderBackground={() => (
              <View key="background">
                <Image source={images.profileBannerImg}
								/>
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}
				>
					<View style={{paddingTop:10}}>
						<ButtonGroup
				      onPress={this.updateIndex}
				      selectedIndex={selectedIndex}
				      buttons={buttons}
				      containerStyle={{height: 30}} />
					</View>

					{ selectedIndex === 0 ?
						<FlatList
							data={user_posts}
							keyExtractor={(item, index) => item._id}
							renderItem={({item}) =>
									<QuestionPanel
										postContent={item}
										title={item.post_title}
										navigation={navigation}
									/>}
									ListFooterComponent={this.renderFooter}
									onEndReachedThreshold={50}
									removeClippedSubviews={false}
						/> :
						<FlatList
							data={responded_posts}
							keyExtractor={(item, index) => item._id}
							renderItem={({item}) =>
									<QuestionPanel
										postContent={item}
										title={item.post_title}
										navigation={navigation}
									/>}
									ListFooterComponent={this.renderFooter}
									onEndReachedThreshold={50}
									removeClippedSubviews={false}
					/>}

				</ParallaxScrollView>

				</View>
    );
  }
}

ProfileContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');

  return {
    user_posts: Meteor.collection('posts').find({ user_id: Meteor.userId() }, { sort: { created: -1 } }),
		responded_posts: Meteor.collection('posts').find({ "post_comments.user_id": Meteor.userId() }, { sort: { created: -1 } }),
		postsReady: handle.ready(),
		//liked_posts: Meteor.collection('posts').find({ post_likes: Meteor.userId() }, { sort: { created: -1 } }),
	};
}, ProfileContainer);
