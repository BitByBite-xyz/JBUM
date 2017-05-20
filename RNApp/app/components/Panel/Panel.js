import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import { Icon } from 'react-native-elements'



class Panel extends Component {
    constructor(props) {
        super(props);

        /*
        this.hearts = {
            'heartFilled': require('./img/heartFilled.png'),
            'hearUnfilled': require('./img/heatUnfilled.png'),
        }
        */
        this.state = {
            title: props.title,
            responseCounter: props.responseCounter,
            loveCounter: props.loveCounter,
            expanded: false,
            animation: new Animated.Value(),
            isClicked: false,
        };

        activateButton = isClicked => {
            const newState = Object.assign(
                {},
                {
                    isClicked: false
                },
                { isClicked: true },
            )
            this.setState(newState);
        }

    }
    /*
    _onClick() {
        if (this.clicked == false) {
            this.clicked = true;
        }
        else {
            this.clicked = false;
        }
        this.render();
    }
    */

    toggle() {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = images.down;

        if (this.state.expanded) {
            icon = images.up;
        }
        /*
        let hearts = this.hearts['hearUnfilled'];
        if (this.clicked == true) {
            hearts = this.hearts['heartFilled'];
            console.log("hi")
        }
        else {
            hearts = this.hearts['hearUnfilled'];
            console.log("bye")
        }
        */
        const { isClicked } = this.state

        return (
            <View style={styles.hmmm}>
                <Animated.View
                    style={[styles.container, { height: this.state.animation }]}>
                    <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                        <Text style={styles.title}>{this.state.title}</Text>
                    </View>

                    <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        {this.props.children}
                        <Text style={styles.counters}>{this.props.body}</Text>
                        <View style={styles.answer}>
                            <Text style={styles.counters} onPress={null}>Answer Question</Text>
                        </View>
                    </View>

                </Animated.View>
                <View style={styles.bottom}>
                    <View style={styles.things}>
                        <TouchableHighlight style={styles.imgs} onPress={() => activateButton('isCLicked')}>
                            <Image source={isClicked ? <Icon
  name='g-translate'
  color='#00aced' /> : <Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>} />
                        </TouchableHighlight>
                        <Text style={styles.counters}>{this.state.loveCounter} people sent love</Text>
                    </View>

                    <View style={styles.things}>
                        <View style={styles.imgs}>
                            <Image source={images.questionBox} style={styles.imgs} />
                        </View>
                        <Text style={styles.counters}>{this.state.responseCounter} responses</Text>
                    </View>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="transparent">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

export default Panel;
