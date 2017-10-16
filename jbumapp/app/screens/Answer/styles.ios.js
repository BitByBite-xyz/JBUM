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
    header:{
      height: 50,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: '#d1d1d1'
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    //  paddingRight: '1000',
      backgroundColor: 'red',
    },
    leftContainer: {
      flex: 1,
    //  flexDirection: 'row',
   //   justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 12

     // paddingLeft: 1000,
      //backgroundColor: 'red',
    },
    centerContainer: {
      flex: 1,
      marginLeft:'-75%',
      justifyContent:'center'
    },
    headerText:{
      color: 'black',
      fontSize: 18,
      fontWeight: '500',
      fontFamily: 'Avenir',
      textAlign:'center',
      marginLeft: '10%'
    },
    sortText:{
      color: 'black',
      fontSize: 15,
      fontWeight: '300',
      fontFamily: 'Avenir',
    },
});
