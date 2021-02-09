import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

import { loadProfile, loadMails } from './actions';

import Profile from './components/Profile';
import SideNavigation from './components/SideNavigation';
import InboxBody from './components/InboxBody';

import './index.scss';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace :true
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  reducer,
  enhancer
);

store.dispatch(loadProfile());
store.dispatch(loadMails());

const App = () =>
  <div className="container" id="app">
    <div className="mail-box">
      <aside className="sm-side">
        <Profile />
        <SideNavigation />
      </aside>
      <aside className="lg-side">
        <InboxBody />
      </aside>
    </div>
  </div>;


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);