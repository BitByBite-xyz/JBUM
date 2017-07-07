import Dimensions from 'Dimensions';

//store any appwide variables and colors here

export const colors = {
  background: '#F3F3F3',
  errorText: '#FA3256',
  headerText: '#444444',
  buttonBackground: '#00abff',
  buttonText: '#FFFFFF',
  inputBackground: 'rgba(0, 0, 0, 0.4)',
  inputWrapper : 'rgba(0, 0, 0, 0)'
};

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
