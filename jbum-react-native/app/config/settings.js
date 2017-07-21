// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'ws://localhost:3000/websocket';

if (process.env.NODE_ENV === 'production') {
  METEOR_URL = 'wss://jbum.meteorapp.com/websocket'; // your production server
}

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;