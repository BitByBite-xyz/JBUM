import { combineReducers } from 'redux';

import nav from './nav';
import network from './network';
import notification from './notification';
import quote from './quote';
import userData from './userData';

export default combineReducers({
  nav,
  network,
  notification,
  quote,
  userData
})
