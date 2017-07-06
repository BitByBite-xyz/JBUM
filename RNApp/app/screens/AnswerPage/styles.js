import {
	StyleSheet,
	Dimensions
}
from 'react-native';
import {
	colors,
	DEVICE_WIDTH,
	DEVICE_HEIGHT
}
from '../../config/styles';

const window = Dimensions.get('window');


export default StyleSheet.create({
  backdrop: {
      backgroundColor: '#F3F3F3',
      flex: 1
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
      fontFamily: 'Avenir-Heavy',
      fontSize: 17,
      fontWeight: 'bold'
  },
  bottom: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: 20
  },
  bottomBox: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: 'white'
  },
  views: {
      paddingTop: 15,
      paddingRight: 23
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
      textAlign: 'center'
  },
  largeText: {
      height: 300,
      backgroundColor: 'white',
      //borderWidth: 2,
      //borderColor: '#E5E5E5',
      //borderRadius: 5,
      color: '#BABABA',
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
  addTags: {
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#BABABA',
    padding: 3.5
  }
});
