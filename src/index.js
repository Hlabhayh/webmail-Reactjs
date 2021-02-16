import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import getMails from './store/reducers/getMails';
import getProfile from './store/reducers/getProfile';
import paginator from './store/reducers/pageChange';
import changeSection from './store/reducers/changeSection';
import { search } from './store/reducers/search';

import { loadProfile, loadMails } from './store/actions/actions';

import App from './app';

import './index.css';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  getMails,
  getProfile,
  changeSection,
  paginator,
  search,
});

const store = createStore(rootReducer, enhancer);

store.dispatch(loadProfile());
store.dispatch(loadMails());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
