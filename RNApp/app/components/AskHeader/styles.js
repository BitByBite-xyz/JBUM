import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    main: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.headerText,
        fontWeight: '400',
        fontStyle: 'italic'
    },
    backdrop: {
        backgroundColor: '#F3F3F3',
        flex: 1
    },
    bottomPadding: {
        height: 6
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    fakeButton: {
        fontSize: 16,
        paddingTop: 8,
        color: '#BABABA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontFamily: 'Avenir',
        fontSize: 17
    },
    textBold: {
        color: 'black',
        fontFamily: 'Avenir',
        fontSize: 17,
        fontWeight: 'bold'
    },
    bottom: {
        backgroundColor: 'white',
        borderRadius: 5
    },
    bottomBox: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F3F3F3'
    },
    views: {
        paddingTop: 8,
        paddingLeft: 12,
        paddingRight: 12,
        //Also padding-bottom can be added too
        // This can be changed to add a divider between the boxes; change to E5E5E5
    },
    button: {
        paddingBottom: 10,
        paddingTop: 15,
        paddingLeft: 17,
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallText: {
        height: 40,
        color: '#BABABA',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Avenir-Book'

    },
    questionBox: {
        height: 60,
        color: '#BABABA',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 17,
        fontFamily: 'Avenir'
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
    dropdown: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        flex: 0
    },
    selectors: {
        margin: 8
    },
    selectorText: {
        fontFamily: 'Avenir',
        color: '#BABABA',
        fontSize: 14,
        margin: 4
    },
});
