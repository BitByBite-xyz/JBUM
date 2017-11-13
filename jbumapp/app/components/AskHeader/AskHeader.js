import React, { PureComponent } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

class AskHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = ({
      question: '',
      description: '',
    });

  }

  render() {
    const { onAskPress } = this.props;

    return (
      <TouchableOpacity onPress={onAskPress} activeOpacity={1}>
        <View style={styles.backdrop}>
          <View style={styles.bottomBox}>
            <View style={styles.bottom}>
              <View style={styles.views}>
                <Text style={styles.questionBox}>Have a question?</Text>
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

export default AskHeader;
