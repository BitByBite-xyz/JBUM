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
import ReactNativeHaptic from 'react-native-haptic';

import Loading from '../../components/Loading';
import AlertPanel from '../../components/AlertPanel';
import Foreground, {Background} from '../../components/ParallaxProfile';
import QuestionPanel from '../../components/QuestionPanel';

import DEVICE_HEIGHT from '../../config/styles';
import styles from './styles';
import images from '../../config/images';
import {queryConstructor} from '../../lib/queryHelpers';

const background = (
	<Background source={images.profileBannerImg} />
);
class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			answeredNumber: 0
		}
		this.updateIndex = this.updateIndex.bind(this)
	}

	compontWillRecieveProps(){
		this.calculateRespondedPosts();
	}

	updateIndex (selectedIndex) {
		ReactNativeHaptic.generate('selection')
		this.setState({selectedIndex})
	}

	renderHeader = () => {
		const { postsReady, user_posts, responded_posts } = this.props;
		const { selectedIndex } = this.state;
		if (selectedIndex === 0 && user_posts.length === 0) {
			return (<AlertPanel
								contentText={'You haven\'t posted yet!'} />
							)
		}
		else if (selectedIndex === 1 && responded_posts.length === 0) {
			return (<AlertPanel
								contentText={'You haven\'t replied yet!'} />
							)
		}
		else {
			return null;
		}
	}

	renderFooter = () => {
		const { postsReady, user_posts, responded_posts } = this.props;
		const { selectedIndex } = this.state;

		if (postsReady && user_posts){
			if (selectedIndex === 0 && user_posts.length > 3) {
				return (
					<View
						style={{
							paddingVertical: '20%',
							backgroundColor:'#F3F3F3',
						}}>
						</View>);
			}
			else {
				return (
					<View
						style={{
							paddingVertical: '70%',
							backgroundColor:'#F3F3F3',
						}}>
						</View>);
			}
		}
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

	calculateRespondedPosts = () => {
		const { responded_posts } = this.props;
		if (responded_posts.length===0) return 0;
		const userId = Meteor.userId();
		let count = 0;
		
		responded_posts.map((post) => {
			post.post_comments.map((comment) => {
				if (comment.user_id === userId) {
					count++;
				}
			})
		})
		return count;
	}

  render() {
		const { user_posts,responded_posts,postsReady,navigation } = this.props;
		const { answeredNumber } = this.state;
		const PARALLAX_HEADER_HEIGHT = 170;
		const buttons = ['My Questions', 'My Answers'];
  		const { selectedIndex } = this.state;
		const questionNumber = user_posts.length;
		const karma = Math.floor((questionNumber + this.calculateRespondedPosts())*1.5);
		const userId = Meteor.userId();

		const foreground = (
		  <Foreground
				QuestionNumber={questionNumber}
				AnsweredNumber={this.calculateRespondedPosts()}
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
					backgroundColor={'#57C2D7'}
					style={{ flex: 1, backgroundColor: '#F3F3F3', overflow: 'hidden' }}
					parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
					stickyHeaderHeight={0}
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
									ListHeaderComponent={this.renderHeader}
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
							ListHeaderComponent={this.renderHeader}
							onEndReachedThreshold={50}
							removeClippedSubviews={false}
					/>}
			</View>
				</ParallaxScrollView>

				</View>
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
	var repliedTerms = {
		viewName: 'repliedPosts',
		limit:50
	}

	var repliedParameters = queryConstructor(repliedTerms);


  return {
    user_posts: Meteor.collection('posts').find({ user_id: Meteor.userId() }, { sort: { createdAt: -1 } }),
	responded_posts: Meteor.collection('posts').find(repliedParameters.find, repliedParameters.sort),
	postsReady: handle.ready(),
	};
}, ProfileContainer);
