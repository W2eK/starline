import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import categories from './categories';
import poi from './poi';

export const history = createBrowserHistory();

const initialState = {};
const middleWare = [thunk];

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ categories, poi });
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    poi
  });

const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), ...middleWare))
);

export default store;
