import { StyleSheet } from 'react-native';
import { colors,DEVICE_WIDTH,DEVICE_HEIGHT } from '../../config/styles';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  myDescription: {
    padding: 10,
    paddingTop: 0,
    color: '#AAAAAA',
    fontSize: 15,
    fontFamily: 'Avenir'
  },
  headerContainer: {
    margin: 5,
    backgroundColor: 'white'
  },
  questionPanelContainer: {
    flexDirection: 'column',
    margin: 7,
    backgroundColor: 'white',
    opacity: 1,
    overflow: 'hidden',
    borderRadius: 6
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#AAAAAA',
    fontWeight: '500'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonImage: {
    width: 30,
    height: 25
  },
  bottom: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 12,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    paddingRight:29,
    justifyContent: 'flex-end',
  },
  heartFilled: {
    width: 23,
    height: 20.7,
    paddingLeft: 5
  },
  commentButton: {
    width: 22,
    height: 17,
    paddingLeft: 5
  },
  counters: {
    fontFamily: "Avenir",
    fontSize: 16,
    color: '#AAAAAA',
    paddingBottom: 2
  },
  imgs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 50,
    paddingBottom: 2
  },
  lineDivider: {
      width: 320,
      borderTopColor: '#DBD9D9',
      borderTopWidth: .5,
      margin: 20,
  },
  timeText: {
    color: '#BBB',
    fontFamily: 'Avenir',
    fontSize: 16,
  },
  created: {
    fontSize: 12,
    color: '#BBB'
  },
});
