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


import Button from '../../components/Button';
import styles from './styles';
import images from '../../config/images';
import Icon from 'react-native-vector-icons/Ionicons';

const ProflieQuestions = (props) => {
  const { QuestionNumber, AnsweredNumber, Karma, Level,Name } = props;

  return (

			<ScrollableTabView
					renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
					>
						<FlatList
							data={[{key: 'f'}, {key: 'b'}]}
							renderItem={({item}) => <Text>{item.key}</Text>}
						/>
						<Text tabLabel='Tab #2'>favorite</Text>
						<Text tabLabel='Tab #3'>project</Text>

					</ScrollableTabView>

  );
};

ProflieQuestions.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default ProflieQuestions;
