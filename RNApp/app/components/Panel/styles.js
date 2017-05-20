import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
          backgroundColor: 'white',
          overflow: 'hidden',
          opacity: 1,
      },
      titleContainer: {
          flexDirection: 'row',
      },
      hmmm: {
          flexDirection: 'column',
          margin: 7,
          backgroundColor: 'white',
          opacity: 1,
          overflow: 'hidden',
          borderRadius: 4,
      },
      title: {
          flex: 1,
          padding: 10,
          color: '#D3D3D3',
          fontWeight: 'normal',
          fontSize: 18,
          fontFamily: "Avenir",
      },
      button: {
          paddingTop: 0,
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: 30
      },
      buttonImage: {
          resizeMode: 'contain',
      },
      body: {
          padding: 10,
          paddingTop: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: .2,
      },
      bottom: {
          flexDirection: 'row',
          flex: 1,
          justifyContent: "space-between",
          paddingTop: 10,
          paddingBottom: 10
      },
      counters: {
          fontFamily: "Avenir",
          fontSize: 16,
          color: '#D3D3D3'
      },
      imgs: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 7,
          paddingRight: 4,
          paddingBottom: 2,
      },
      things: {
          flexDirection: 'row',
          paddingBottom: 5,
      },
      answer: {
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center'
      }
  });
