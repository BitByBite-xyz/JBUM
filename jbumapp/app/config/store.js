import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas'

import reducer from '../reducers';
//import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();



const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));
//sagaMiddleware.run(rootSaga);

sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})

export default store;
