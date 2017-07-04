import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

class AskHeader extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      question: '',
      description: '',
    });

  }

  render() {
    const { onAskPress } = this.props;
    console.log(onAskPress);


    return (
      <TouchableOpacity onPress={onAskPress} activeOpacity={1}>
        <View style={styles.backdrop}>
          <View style={styles.bottomBox}>
            <View style={styles.bottom}>
              <View style={styles.views}>
                <Text style={styles.largeText}>Have a question?</Text>
              </View>
              <View style={styles.button}>
                <View style={styles.lineDivider} />
                <Text style={styles.fakeButton}>Ask Question</Text>
              </View>
            </View>
            <View style={styles.bottomPadding} />
          </View>
        </View >
      </TouchableOpacity>
    );
  }
}
AskHeader.propTypes = {
  navigator: React.PropTypes.object,
  onAskPress: React.PropTypes.func,

};

export default AskHeader;
