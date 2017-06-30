import React, {
    Component
}
from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    View
}
from 'react-native';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            likes: 0,
            comments: 0
        };
    }

    _onPress() {
        this.setState({ liked: !this.state.liked });
        if(this.state.liked) {
          this.setState({ likes: this.state.likes = this.state.likes - 1});
        }
        else {
          this.setState({ likes: this.state.likes = this.state.likes + 1});
          console.log('liked');
        }
    }

    render() {
        let { liked, likes, comments } = this.state;

        return (
          <View style={styles.bottom}>

              <TouchableOpacity style={styles.imgs} onPress={() => this._onPress()}>
                <Image
                    source={liked ? require('./images/heart.png') : require('./images/heartUnfilled.png')}
                    style={styles.button}
                />
              </TouchableOpacity>
                <Text style={styles.counters}>{likes} people sent love</Text>

              <TouchableOpacity style={styles.imgs}>
                <Image
                  source={require('./images/comment.png')}
                  style={styles.button}
                />

              </TouchableOpacity>
                <Text style={styles.counters}>{comments} responses</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    bottom: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      paddingTop: 10,
      paddingBottom: 10,
      resizeMode: 'contain'
    },
    button: {
        width: 25,
        height: 22,
        paddingLeft: 5,
        paddingBottom: 5
    },
    counters: {
      fontFamily: "Avenir",
      fontSize: 16,
      color: '#D3D3D3',
      paddingLeft: 0,
      paddingBottom: 2
    },
    imgs: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 0,
      paddingBottom: 2,

    },



});

export default LikeButton;
