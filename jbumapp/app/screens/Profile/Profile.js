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

import Loading from '../../components/Loading';
import QuestionPanel from '../../components/QuestionPanel';

import styles from './styles';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);

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
		const { user_posts,responded_posts,liked_posts,postsReady,navigation } = this.props;

		return (
			<View style={styles.container}>
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
									removeClippedSubviews={false}
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
									removeClippedSubviews={false}
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
											removeClippedSubviews={false}
										/>

							</ScrollableTabView>
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
		liked_posts: Meteor.collection('posts').find({ post_likes: Meteor.userId() }, { sort: { created: -1 } }),
	};
}, ProfileContainer);
