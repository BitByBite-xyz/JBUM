import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.background,
    flexDirection: 'column',
    height: 40,
    borderRadius: 50,
    zIndex: 100
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5
	},
  actionButtonIcon: {
    height: 22,
  },
});
