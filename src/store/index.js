import rootReducer from "../reducers";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
const middleware = [ thunk ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
  ));