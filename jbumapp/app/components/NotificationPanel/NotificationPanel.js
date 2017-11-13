import React, { PureComponent } from 'react';
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

import images from '../../config/images';
import { colors } from '../../config/styles';
import FadeInView from '../FadeInView';//{/* onFadeComplete={() => alert('Ready') */}

import styles from './styles.js';

class NotificationPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    const { navigation, header,postContent } = this.props;

    this.state = {
      is_visible: false,
      expanded: false,
      animation: new Animated.Value(),
    };

    this.setMaxHeight = this.setMaxHeight.bind(this);
    this.setMinHeight = this.setMinHeight.bind(this);
    this.toggle = this.toggle.bind(this);
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

  render() {
    const { children, style, header,postContent } = this.props;
    const { expanded, animation } = this.state;

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
              <Text style={styles.myDescription}>{postContent.post_body}</Text>
              {/* I don't know if we need a timestamp for something like this
              <View style={styles.questionPanelContainer}>
                <Text style={[styles.timeText, styles.created]}>{' '+moment(postContent.created).fromNow()}</Text>
              </View>
              */}
            </View>
          }
        </Animated.View>

      </View>
    );

  }
}

export default NotificationPanel;
