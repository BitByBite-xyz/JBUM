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
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
    borderRadius: 9
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
    paddingBottom: 5,
    paddingLeft: 12,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    paddingRight:29,
    justifyContent: 'space-around',
  },
  heartFilled: {
    marginBottom: 4,
    marginRight: 5,
    marginLeft: 10,
    width: 23,
    height: 21,
    paddingLeft: 5
  },
  commentButton: {
    width: 22,
    height: 17,
    marginRight: 5,
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
    marginRight: 43,
    paddingBottom: 2
  },
  lineDivider: {
      width: '90%',
      borderTopColor: '#DBD9D9',
      borderTopWidth: .3,
      justifyContent: 'center',
      marginBottom: 17,
      marginTop: 2,
      marginLeft: 18
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
