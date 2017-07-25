import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  contentContainerStyle: {
      paddingTop: 7,
      paddingBottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3'
    },
    firstHeaderContainer: {
      backgroundColor: '#ccc'
    },
    firstHeader: {
      marginHorizontal: 10,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      height: 50
    },
    thirdHeaderContainer: {
      margin: 15,
      backgroundColor: 'yellow'
    },
    myDescription: {
      padding: 10,
      paddingTop: 0
    },
    customContent: {
      backgroundColor: '#bada55',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10
    },
    square: {
      backgroundColor: 'yellow',
      width: 50,
      height: 50
    },
    circle: {
      backgroundColor: 'blue',
      width: 50,
      height: 50,
      borderRadius: 25
    },
});
