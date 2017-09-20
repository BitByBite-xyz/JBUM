import React, { PureComponent, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
  ScrollView
} from 'react-native';
import moment from 'moment';
import { Icon, Divider, Badge } from 'react-native-elements'
import Meteor, { createContainer } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import images from '../../config/images';
import { colors } from '../../config/styles';
import styles from './styles.js';
import Modal from 'react-native-modal';

class Panel extends PureComponent {
  constructor(props) {
    super(props);
    const { navigation, header,postContent } = this.props;

    this.state = {
      comments: postContent.post_comments.length,
      post_categories: postContent.post_categories,
      isModalVisible: false,
      is_visible: false,
      expanded: false,
      animation: new Animated.Value(),
      isUsersPost: postContent.user_id === Meteor.userId()
    };

    this.setMaxHeight = this.setMaxHeight.bind(this);
    this.setMinHeight = this.setMinHeight.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onReportPress = () => {
    const { postContent } = this.props;

    Meteor.call('Posts.report', postContent._id, (err) => {
      if (err) {
        console.log("Post err"+err.details);
        Alert.alert(
          'Oops! Screenshot this and send to support!',
          'Server error: \n\n'+err.details
        );
        return;
      } else {
        console.log("Post report handled");
        this._hideModal();
      }
    });
  }

  onDeletePress = () => {
    const { postContent } = this.props;
    console.log("jejife");

    Meteor.call('Posts.remove', postContent._id, (err) => {
      if (err) {
        console.log("Post err"+err.details);
        Alert.alert(
          'Oops! Screenshot this and send to support!',
          'Server error: \n\n'+err.details
        );
        return;
      } else {
        console.log("Post delete handled");
        this._hideModal();
      }
    });
  }

  onLikePress() {
    const { postContent } = this.props;

    this.setState({ liked: !this.state.liked });
    if (this.state.liked) {
      this.setState({ likes: this.state.likes = this.state.likes - 1 });

      Meteor.call('Posts.unlike', postContent._id , (err) => {
        if (err) {
          console.log("Like err:"+err.details);
          return;
        } else {
          console.log("like removed. Sad!");
        }
      });
    }
    else {
      this.setState({ likes: this.state.likes = this.state.likes + 1 });
      console.log(postContent._id);

      Meteor.call('Posts.like', postContent._id , (err) => {
        if (err) {
          console.log("Like err:"+err.details);
          return;
        } else {
          console.log("Like added");
        }
      });
    }
  }
  onReplyPress(){
    const { header, navigation, postContent } = this.props;

    let title = header;

    if (navigation) {
      navigation.navigate("Reply",{ postContent: postContent });
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ is_visible: true });
    }, 900);
  }

  toggle() {
    const { expanded, maxHeight, minHeight, animation } = this.state;
    const { onPress } = this.props;

    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    this.setState({ expanded: !expanded });

    animation.setValue(initialValue);

    Animated.spring(animation, { toValue: finalValue }).start();

    if (onPress) onPress();
  }

  setMaxHeight(event) {
    const maxHeight = event.nativeEvent.layout.height
    this.setState({ maxHeight });
  }

  setMinHeight(event) {
    const minHeight = event.nativeEvent.layout.height;
    this.state.animation.setValue(minHeight);
    this.setState({ minHeight });
  }

  renderHeader() {
    const { header,post } = this.props;
    const { expanded } = this.state;
    const icon = expanded ? images.arrowDown : images.arrowUp;

    if (typeof header === 'function') {
      return header();
    } else if (typeof header === 'string') {
      return (
        <View style={styles.button}>
          <Text style={styles.title}>{header}</Text>
          <Image style={styles.buttonImage} source={icon} />
        </View>
      );
    } else {
      return (
        <View style={styles.button}>
          <Text style={styles.title}>
            [Must be String, or Function that {'\n'}
            render React Element]
            </Text>
          <Image style={styles.buttonImage} source={icon} />
        </View>
      );
    }
  }

  renderCategoryBadges() {
    const { post_categories } = this.state;
    const colors = ['#B565C6','#D63E87','#00B796', '#00D2F1', '#FEBE00', '#FF5656'];
    //const color =  "#"+((1<<24)*Math.random()|0).toString(16);

    if (post_categories) {
      var items = post_categories.map(function (item, index){

          return (
            <Badge
              key={item}
              containerStyle={{ backgroundColor: colors[index], marginRight: 2} }
              value={item}
              textStyle={{ color: 'white' }}
            />
          );
      });
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items}
        </ScrollView>

      );
    }
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    const { children, style, header,postContent } = this.props;
    const { expanded, animation, isUsersPost } = this.state;
    let { liked, likes, comments } = this.state;

    return (
      <View style={styles.questionPanelContainer}>
        <Animated.View style={[
          styles.questionPanelContainer, style, {
            overflow: 'hidden',
            height: animation
          }
        ]}>
          <TouchableOpacity
            ref={ref => this._header = ref}
            activeOpacity={1}
            onPress={this.toggle}
            onLayout={this.setMinHeight}
          >
            {this.renderHeader()}
          </TouchableOpacity>
          {this.state.is_visible &&
            <View onLayout={this.setMaxHeight}>
              <Text style={styles.myDescription}>
                {postContent.post_body}
              </Text>
              <View style={styles.questionPanelContainer}>
                <Text style={[styles.timeText, styles.created]}>{' '+moment(postContent.createdAt).fromNow()}</Text>
                <View style={{flexDirection:'row'}}>{this.renderCategoryBadges()}</View>
              </View>
            </View>
          }
        </Animated.View>

        <View style={styles.lineDivider} />
        <View style={styles.bottom}>
          <TouchableOpacity onPress={this._showModal} style={styles.optionsButton}>
          <Icon
            style={styles.elipsisIcon}
            name='more-horiz'
            size={28}
            color={'#C1C1C2'}
          />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imgs} onPress={() => this.onReplyPress()}>

            <Text style={styles.counters}>{' '+postContent.post_comments.length} </Text>
            <Icon
              name='chat'
              color={colors.buttonBackground}
              style={styles.commentButton}
            />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <Modal style={styles.modal}
                 isVisible={this.state.isModalVisible}
                 animationIn={'slideInDown'}
                 animationOut={'slideOutUp'}
                 backdropOpacity={.4}
          >
            <View style={styles.popupContainer}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this._hideModal}>
                <Icon
                  name='close'
                  color={colors.buttonBackground}
                  style={{marginLeft: '10%', marginTop: '10%'}}
                />
                </TouchableOpacity>
                <Text style={styles.popupTitle}>Question Options</Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}>
                <View style={{marginRight: '16%'}}>
                  <TouchableOpacity onPress={() => this.onReportPress()}>
                  <Icon
                    name='report-problem'
                    color={'#FF5848'}
                    size={35}
                  />
                  </TouchableOpacity>
                  <Text style={styles.popupSubTitles}>Report</Text>
                </View>

                { isUsersPost ?
                  <View>
                    <TouchableOpacity onPress={() => this.onDeletePress()}>
                    <Icon
                      name='delete-forever'
                      color={'gray'}
                      size={35}
                    />
                    </TouchableOpacity>
                    <Text style={styles.popupSubTitles}>Delete</Text>
                  </View> : null
                }

                <View style={{marginLeft: '16%'}}>
                  <TouchableOpacity>
                  <Icon
                    name='announcement'
                    color={'#ECC21B'}
                    size={35}
                  />
                  </TouchableOpacity>
                  <Text style={styles.popupSubTitles}>Urgent</Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

Panel.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  onPress: PropTypes.func,
};

export default Panel;
