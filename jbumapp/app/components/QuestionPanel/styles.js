import { StyleSheet, Platform } from 'react-native';
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
    borderRadius: 9,
  },
  popupContainer: {
    width: '95%',
    marginBottom: 15,
    backgroundColor: colors.background,
    borderRadius: 9,
    shadowColor: '#282C34',
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
  popupTitle: {
    marginTop: 4.5,
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'Avenir',
    marginLeft: '3.25%',
    color: 'gray'
  },
  popupSubTitles: {
    fontFamily: 'Avenir',
    marginTop: '3%',
    fontSize: 16,
    color: 'gray',
    marginBottom: 5
  },
  elipsisIcon: {
    ...Platform.select({
      android: {
        marginRight: -5
      },
    }),
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
    paddingRight:29,
    justifyContent: 'space-between',
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
    marginLeft: 6,
    marginRight: 5,
    paddingBottom: 5
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
    marginRight: 3,
    paddingBottom: 2
  },
  optionsButton: {
    justifyContent: 'flex-start',
    marginLeft: '2%',
    marginBottom: '2.5%'
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
    marginBottom: 4,
    color: '#BBB'
  },
  modal: {
    alignItems: 'center'
  }
});
