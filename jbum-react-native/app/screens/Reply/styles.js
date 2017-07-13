import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  contentContainerStyle: {
      paddingTop: 30,
      paddingBottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3'
    },
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
      fontSize: 25
  },
  questionTitleText: {
      color: '#BABABA',
      fontFamily: 'Avenir',
      fontSize: 30,
      paddingBottom: 5
  },
  questionTitleContainer: {
      alignItems: 'center',
      paddingBottom: 8
  },
  questionText: {
      color: '#BABABA',
      fontFamily: 'Avenir',
      fontSize: 16
  },
  textBold: {
      color: 'black',
      fontFamily: 'Avenir-Heavy',
      fontSize: 17,
      fontWeight: 'bold'
  },
  bottom: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingLeft: 15,
      paddingTop: 15
  },
  topBox: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingTop: 10,
      paddingBottom: 12,
      paddingLeft: 20,
      margin: 10,
      paddingRight: 15
  },
  bottomBox: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#FFFFFF',
      borderRadius: 8
  },
  views: {
      paddingRight: 0,
      //Also padding-bottom can be added too
      // This can be changed to add a divider between the boxes; change to E5E5E5
  },
  button: {
    paddingTop: 14,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#BBB',
  },
  lineDivider: {
      width: 320,
      borderTopColor: '#DBD9D9',
      borderTopWidth: .5,
      paddingLeft: 10,
      paddingRight: 10,
  },
  smallText: {
      height: 50,
      backgroundColor: '#E5E5E5',
      borderWidth: 2,
      borderColor: '#E5E5E5',
      borderRadius: 8,
      paddingRight: 25,
      paddingLeft: 25,
      textAlign: 'center',

  },
  largeText: {
      height: 300,
      backgroundColor: 'white',
      //borderWidth: 2,
      //borderColor: '#E5E5E5',
      //borderRadius: 5,
      color: '#BABABA',
      fontSize: 16,
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
