import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import categories from './categories';
import poi from './poi';

const initialState = {};
const middleWare = [thunk];

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ categories, poi });

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
