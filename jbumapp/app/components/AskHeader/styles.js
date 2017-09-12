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
      fontSize: 20,
      color: '#BABABA',
      fontFamily: 'Avenir',
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
      flexDirection: 'column',
      margin: 7,
      backgroundColor: 'white',
      opacity: 1,
      overflow: 'hidden',
      borderRadius: 9
  },
  views: {
      paddingTop: 8,
      paddingLeft: 12,
      paddingRight: 12,
      //Also padding-bottom can be added too
      // This can be changed to add a divider between the boxes; change to E5E5E5
  },
  button: {
      paddingBottom: 7,
      paddingTop: 15,
      paddingLeft: 17,
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
      paddingTop: 5,
      fontSize: 22,
      fontFamily: 'Avenir'
  },
  lineDivider: {
    width: '95%',
    borderTopColor: '#DBD9D9',
    borderTopWidth: .3,
    justifyContent: 'center',
    marginBottom: 17,
    marginTop: 2,
    marginRight: '6%',
    //marginLeft: 18
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
