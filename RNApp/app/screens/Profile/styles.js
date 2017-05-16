import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  info: {
	    flexDirection: 'row',
	    justifyContent: 'space-around',
	    alignItems: 'center'
	},
	info2: {
	    flexDirection: 'row',
	    justifyContent: 'space-around',
	    alignItems: 'center',
	    bottom: 5
  	},
	text: {
		color: 'white',
		fontFamily: 'Avenir',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 18,
		letterSpacing: 2,
    alignSelf: 'center'
	},
  	text2: {
      	color: 'white',
  		fontFamily: 'Avenir-Heavy',
  		backgroundColor: 'transparent',
  		marginTop: 20,
  		fontSize: 18,
  		letterSpacing: 2,
      	alignSelf: 'center'
	},
  	text3: {
	    color: 'white',
	    fontFamily: 'Avenir-Light',
	    backgroundColor: 'transparent',
	    fontSize: 12,
	    alignSelf: 'center'
  	},
  	levelView: {
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center'
  	},
  	progressBar: {
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
		paddingBottom: 23
  	}
});
