import React, {PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	FlatList ,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import FadeInView from 'react-native-fade-in-view';
import QuestionPanel from '../../components/QuestionPanel';
import Button from '../../components/Button';
import styles from './styles';
import images from '../../config/images';
import Icon from 'react-native-vector-icons/Ionicons';

const ProflieQuestions = (props) => {
  const { QuestionNumber,
					AnsweredNumber,
					Karma,
					Level,
					navigation } = props;

	const { user_posts,responded_posts,liked_posts } = props;
					console.log(user_posts);

  return (



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
								/>

					</ScrollableTabView>

  );
};

ProflieQuestions.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default ProflieQuestions;
