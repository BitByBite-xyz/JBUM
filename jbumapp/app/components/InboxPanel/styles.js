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
    marginTop: 11,
    backgroundColor: 'white',
    opacity: 1,
    borderRadius: 9,
  },
  lineDivider: {
    width: DEVICE_WIDTH-30,
    marginLeft: 7,
    borderBottomColor: '#DBD9D9',
    borderTopWidth: .3,
  },
  title: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 12,
    color: '#2a2f43',
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#AAAAAA',
    fontWeight: '500'
  },
  bottom: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 3,
    width: DEVICE_WIDTH-15,
    paddingRight:20,
    justifyContent: 'space-between',
  },
  timeText: {
    color: '#BBB',
    fontFamily: 'Avenir',
    fontSize: 16,
  },
  created: {
    fontSize: 12,
    marginBottom: 2,
    color: '#BBB'
  },
  myDescription: {
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
    color: '#AAAAAA',
    fontSize: 16,
    fontWeight: '600',
    color: '#5CC2D6',
    fontFamily: 'Avenir'
  },

});
