import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  myDescription: {
    padding: 10,
    paddingTop: 0
  },
  headerContainer: {
    margin: 5,
    backgroundColor: 'white'
  },
  container1: {
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
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonImage: {
    width: 30,
    height: 25,
  },
  bottom: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    resizeMode: 'contain',
    paddingLeft: 12
  },
  button2: {
    width: 20,
    height: 18,
    paddingLeft: 5,
  },
  commentButton: {
    width: 22,
    height: 17,
    paddingLeft: 5,
  },
  counters: {
    fontFamily: "Avenir",
    fontSize: 16,
    color: '#AAAAAA',
    paddingLeft: 0,
    paddingBottom: 2
  },
  imgs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    paddingBottom: 2
  },
});
