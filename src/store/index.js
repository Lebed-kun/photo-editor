import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

import { openFileMiddleware, uploadImageMiddleware } from '../middleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(openFileMiddleware, uploadImageMiddleware))
);

export default store;
