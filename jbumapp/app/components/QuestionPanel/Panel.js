import React, { PureComponent, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import moment from 'moment';
import { Icon, Divider } from 'react-native-elements'
import Meteor, { createContainer } from 'react-native-meteor';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import images from '../../config/images';
import { colors } from '../../config/styles';
import styles from './styles.js';
import Modal from 'react-native-modal';

class Panel extends React.PureComponent {
  constructor(props) {
    super(props);
    const { navigation, header,postContent } = this.props;

    this.state = {
      //liked: (postContent.post_likes) ? postContent.post_likes.includes(Meteor.userId()) : false,
      //likes: (postContent.post_likes) ? postContent.post_likes.length : 0,
      comments: postContent.post_comments.length,
      isModalVisible: false,
      is_visible: false,
      expanded: false,
      animation: new Animated.Value(),
    };

    this.setMaxHeight = this.setMaxHeight.bind(this);
    this.setMinHeight = this.setMinHeight.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onMorePress() {
    const { navigation } = this.props;

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

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    const { children, style, header,postContent } = this.props;
    const { expanded, animation } = this.state;
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
                <Text style={[styles.timeText, styles.created]}>{' '+moment(postContent.created).fromNow()}</Text>
              </View>
            </View>
          }
        </Animated.View>

        <View style={styles.lineDivider} />
        <View style={styles.bottom}>

          {/*<TouchableOpacity style={styles.imgs} onPress={() => this.onLikePress()}>
            <Image
              source={liked ? images.heartFilled : images.heartUnfilled}
              style={styles.heartFilled}
            />
            <Text style={styles.counters}>{' '+likes} loved</Text>
          </TouchableOpacity>*/}
          <TouchableOpacity onPress={this._showModal}>
          <Icon
            name='more-horiz'
            color={colors.buttonBackground}
            style={styles.commentButton}
          />

          </TouchableOpacity>


          <TouchableOpacity style={styles.imgs} onPress={() => this.onReplyPress()}>

            <Text style={styles.counters}>{' '+postContent.post_comments.length} Responses </Text>
            <Icon
              name='chat'
              color={colors.buttonBackground}
              style={styles.commentButton}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1, height: 100, width: 250, backgroundColor: 'white' }}>
              <Text>Hello!</Text>
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
