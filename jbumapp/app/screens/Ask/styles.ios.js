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
      backgroundColor: '#57C2D7',
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
  textBold: {
      color: 'black',
      fontFamily: 'Avenir',
      fontSize: 17,
      fontWeight: 'bold'
  },
  bottom: {
      backgroundColor: 'white',
      borderRadius: 10
  },
  receiverQuestion: {
    flexDirection: 'row',
  },
  bottomBox: {
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 13,
      backgroundColor: '#F3F3F3',
      height: '400%'
  },
  views: {
      paddingTop: 7,
      paddingLeft: 12,
      paddingRight: 12,
      borderBottomRightRadius:10
      //Also padding-bottom can be added too
      // This can be changed to add a divider between the boxes; change to E5E5E5

  },
  dropDown: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
      paddingBottom: 10,
      paddingTop: 15,
      paddingLeft: 17
  },
  largeText: {
      height: 50,
      color: '#BBB',
      textAlign: 'center',
      fontSize: 24,
      fontFamily: 'Avenir-Book'
  },
  smallText: {
      height: 150,
      color: '#BBB',
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 17,
      fontFamily: 'Avenir',

  },
  lineDivider: {
    width: '100%',
    borderTopColor: '#DBD9D9',
    borderTopWidth: .5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dropdown: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
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
  dropdownBackground: {
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
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 25,
    paddingBottom: 5,
    paddingLeft: 10,
    color: '#B8BAB9',
    fontWeight: '600',
  },
  optionsText:{
    color: '#A4A7A6', fontSize: 13
  }
});
