import { AppRegistry } from 'react-native';
import App from './app/index';
import firebase from 'react-native-firebase';

AppRegistry.registerComponent('jbumapp', () => App); //regesters /app/index.js

firebase.analytics().setAnalyticsCollectionEnabled(true);
firebase.analytics().logEvent('add_to_cart', {
  id: '123',
  value: 100
});

firebase.crash().setCrashCollectionEnabled(true);

firebase.perf().setPerformanceCollectionEnabled(true);

const trace = firebase.perf().newTrace('authentication');
trace.start();

/*
  If RNApp gets finnickey try these scripts!


"scripts": {
  "start": "node node_modules/react-native/local-cli/cli.js start",
  "rc-start": "npm start -- --reset-cache",
  "clean": "rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean",
  "clean-start": "npm run clean && npm run rc-start",
  "fresh-install": "rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build/ModuleCache/* && rm -rf node_modules/ && npm cache clean && npm install",
  "fresh-start" : "npm run fresh-install && npm run rc-start",
  "tron": "node_modules/.bin/reactotron"
}

 */
