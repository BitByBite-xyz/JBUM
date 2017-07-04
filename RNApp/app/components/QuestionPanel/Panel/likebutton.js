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

import images from '../../../config/images';

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
        if (this.state.liked) {
            this.setState({ likes: this.state.likes = this.state.likes - 1 });

        }
        else {
            this.setState({ likes: this.state.likes = this.state.likes + 1 });
            console.log('liked');
        }
    }

    render() {
        let { liked, likes, comments } = this.state;

        return (
            <View style={styles.bottom}>

                <TouchableOpacity style={styles.imgs} onPress={() => this._onPress()}>
                    <Image
                        source={liked ? images.heartFilled : images.heartUnfilled}
                        style={styles.button}
                    />
                </TouchableOpacity>
                <Text style={styles.counters}>{likes} people sent love</Text>

                <TouchableOpacity style={styles.imgs}>
                    <Image
                        source={images.commentIcon}
                        style={styles.commentButton}
                    />

                </TouchableOpacity>
                <Text style={styles.counters}>{comments} responses |</Text>
                <TouchableOpacity><Text style={styles.counters}>Reply</Text></TouchableOpacity>
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
        resizeMode: 'contain',
        paddingLeft: 12
    },
    button: {
        width: 20,
        height: 18,
        paddingLeft: 5,
    },
    commentButton: {
        width: 22,
        height: 17,
        paddingLeft: 5,
    },
    counters: {
        fontFamily: "Avenir",
        fontSize: 16,
        color: '#AAAAAA',
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
