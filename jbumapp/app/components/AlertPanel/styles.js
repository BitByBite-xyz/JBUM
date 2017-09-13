import { StyleSheet, Dimensions } from 'react-native';
import { colors,DEVICE_WIDTH,DEVICE_HEIGHT } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  questionPanelContainer: {
    flexDirection: 'column',
    margin: 7,
    backgroundColor: 'white',
    opacity: 1,
    borderRadius: 9,
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontFamily: 'Avenir',
    fontSize: 22,
    color: '#AAAAAA',
    fontWeight: '500'
  },
  bottom: {
    alignItems:'center',
    flex: 1,
    paddingLeft: 10,
    width: DEVICE_WIDTH-15,
    paddingRight:20,
    justifyContent: 'space-between',
  },
});
