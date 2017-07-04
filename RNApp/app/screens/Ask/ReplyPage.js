import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


export default class ReplyPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            question: '',
            description: '',
            selectedTab: ''

        });
    }
    onPressButton() {

    }
    render() {
        return (

            <View style={styles.backdrop}>
                <View style={styles.topPadding}>
                </View>

                <View style={styles.topBox}>
                    <View style={styles.questionTitleContainer}>
                        <Text style={styles.questionTitleText}>Sed ut perspiciatis unde</Text>
                        <View style={styles.lineDivider} />
                    </View>

                    <Text style={styles.questionText}>Sed ut perspiciatis unde omnis iste natus error sit
                                                    voluptatem accusantium doloremque laudantium.
                                                    Nemo enim ipsam voluptatem quia voluptas sit
                                                    aspernatur aut odit aut fugit, sed quia consequuntur
                                                    magni dolores eos qui ratione voluptatem sequi
                                                    nesciunt. Neque porro quisquam est, qui dolorem
                                                    ipsum quia dolor sit amet, consectetur, adipisci
                                                    velit, sed quia non numquam eius modi tempora
                                                    incidunt ut labore et dolore
                                                    </Text>
                </View>
                <View style={styles.bottomBox}>

                    <View style={styles.bottom}>


                        <View style={styles.views}>

                            <TextInput
                                style={styles.largeText}
                                placeholder='Response...'
                                returnKeyType='next'
                                placeholderTextColor='#DBD9D9'
                                underlineColorAndroid='transparent'
                                multiline={true}
                                autoCorrect={false}
                            />
                        </View>
                        <View style={styles.button}>
                            <View style={styles.lineDivider} />
                            <Button color={'#BABABA'} title={'Reply'} onPress={this.onPressButton} />
                        </View>

                    </View>

                </View>

            </View>

        );
    }
}
const styles = {
    backdrop: {
        backgroundColor: '#F3F3F3',
        flex: 1,
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontFamily: 'Avenir',
        fontSize: 17
    },
    questionTitleText: {
        color: '#BABABA',
        fontFamily: 'Avenir',
        fontSize: 25,
        paddingBottom: 5
    },
    questionTitleContainer: {
        alignItems: 'center',
        paddingBottom: 8
    },
    questionText: {
        color: '#BABABA',
        fontFamily: 'Avenir',
        fontSize: 14
    },
    textBold: {
        color: 'black',
        fontFamily: 'Avenir-Heavy',
        fontSize: 17,
        fontWeight: 'bold'
    },
    bottom: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 20,
    },
    topBox: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        margin: 10,
        paddingRight: 15
    },
    bottomBox: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#FFFFF',
    },

    views: {
        paddingTop: 15,
        paddingRight: 23,
        //Also padding-bottom can be added too
        // This can be changed to add a divider between the boxes; change to E5E5E5
    },
    button: {
        paddingBottom: 10,
        paddingTop: 15
    },
    lineDivider: {
        width: 320,
        color: '#BABABA',
        borderTopColor: '#DBD9D9',
        borderTopWidth: .5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15
    },
    smallText: {
        height: 50,
        backgroundColor: '#E5E5E5',
        borderWidth: 2,
        borderColor: '#E5E5E5',
        borderRadius: 5,
        paddingRight: 25,
        paddingLeft: 25,
        textAlign: 'center',

    },
    largeText: {
        height: 200,
        backgroundColor: 'white',
        //borderWidth: 2,
        //borderColor: '#E5E5E5',
        //borderRadius: 5,
        color: '#BABABA',
        fontSize: 15
    },
    topPadding: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 8,
        flex: 0
    },
    selectors: {
        margin: 8,
    },
    selectorText: {
        fontFamily: 'Avenir',
        color: '#BABABA',
        fontSize: 14,
        margin: 4
    },
    plsWork: {
        borderRadius: 20,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
    },
    addTags: {
        fontSize: 14,
        fontFamily: 'Avenir',
        color: '#BABABA',
        padding: 3.5
    }
}
