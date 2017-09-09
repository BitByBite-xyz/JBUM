import { Text } from 'react-native';
// If you're running on a device or in the Android simulator be sure to change
//let METEOR_URL = 'ws://localhost:3000/websocket';
let METEOR_URL = 'wss://jbum.meteorapp.com/websocket';

if (process.env.NODE_ENV === 'production') {
  METEOR_URL = 'wss://jbum.meteorapp.com/websocket'; // your production server
}

Text.defaultProps.allowFontScaling=false

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;
