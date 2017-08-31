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
import FadeInView from 'react-native-fade-in-view';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { ButtonGroup } from 'react-native-elements'

import Loading from '../../components/Loading';
import Foreground, {Background} from '../../components/ParallaxProfile';
import QuestionPanel from '../../components/QuestionPanel';

import DEVICE_HEIGHT from '../../config/styles';
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

		if (postsReady) return (
			<View
				style={{
					paddingVertical: '100%',
					backgroundColor:'#F3F3F3',
				}}>
				</View>);

		return (
			<View
				style={{
					paddingVertical: 20,
				}}
			>
				<Loading />
			</View>
		);
	}

  render() {
		const { user_posts,responded_posts,postsReady,navigation } = this.props;
		const PARALLAX_HEADER_HEIGHT = 170;
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
				navigation={this.props.navigation}
			/>
		);
		const stickyHeader = (
			<View style={{justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'gray' }}>
				<Text style={{ textAlign: 'center', color: 'white', padding: 15, fontSize: 19 }}>Profile</Text>
			</View>
		);
		return (
			<View style={styles.container}>
				<StatusBar hidden = {true}/>
				<ParallaxScrollView
					backgroundColor={'#4CB4C9'}
					style={{ flex: 1, backgroundColor: '#F3F3F3', overflow: 'hidden' }}
					parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
					stickyHeaderHeight={50}
					onScroll={this.props.onScroll}
					contentBackgroundColor='transparent'
					renderStickyHeader={() => stickyHeader}
					renderForeground={() => foreground}
					renderBackground={() => (
              <View key="background">
                <View style={{position: 'absolute',
                              top: 0,
                              width: 'auto',
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}
				>
				<View style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden', backgroundColor: '#F3F3F3'}}>
					<View style={{paddingTop:15, backgroundColor: '#F3F3F3'}}>
						<ButtonGroup
							selectedTextStyle={{fontWeight: '700'}}
							innerBorderStyle={{color: 'transparent'}}
				      onPress={this.updateIndex}
				      selectedIndex={selectedIndex}
				      buttons={buttons}
				      containerStyle={{height: 35, borderRadius: 10}} />
					</View>

					{ selectedIndex === 0 ?
						<FlatList
							data={user_posts}
							initialNumToRender={5}
							keyExtractor={(item, index) => item._id}
							renderItem={({item}) =>
									<QuestionPanel
										postContent={item}
										header={item.post_title}
										navigation={navigation}
									/>}
									ListFooterComponent={this.renderFooter}
									onEndReachedThreshold={50}
									removeClippedSubviews={false}
						/> :
						<FlatList
							data={responded_posts}
							initialNumToRender={5}
							keyExtractor={(item, index) => item._id}
							renderItem={({item}) =>
									<QuestionPanel
										postContent={item}
										header={item.post_title}
										navigation={navigation}
									/>}
									ListFooterComponent={this.renderFooter}
									onEndReachedThreshold={50}
									removeClippedSubviews={false}
					/>}
			</View>
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
    user_posts: Meteor.collection('posts').find({ user_id: Meteor.userId() }, { sort: { createdAt: -1 } }),
		responded_posts: Meteor.collection('posts').find({ "post_comments.user_id": Meteor.userId() }, { sort: { createdAt: -1 } }),
		postsReady: handle.ready(),
		//liked_posts: Meteor.collection('posts').find({ post_likes: Meteor.userId() }, { sort: { created: -1 } }),
	};
}, ProfileContainer);
