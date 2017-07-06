import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
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
      backgroundColor: '#FFFFFF',
      borderRadius: 5
  },
  views: {
      paddingTop: 15,
      paddingRight: 23,
      //Also padding-bottom can be added too
      // This can be changed to add a divider between the boxes; change to E5E5E5
  },
  button: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 8,
    color: '#BABABA',
    justifyContent: 'center',
    alignItems: 'center'
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
      fontSize: 15,
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
  addTags: {
      fontSize: 14,
      fontFamily: 'Avenir',
      color: '#BABABA',
      padding: 3.5
  },
  bottomWrapper: {
    margin: 10,
  }
});
