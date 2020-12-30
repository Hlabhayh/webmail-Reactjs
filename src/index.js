import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import Profile from './components/Profile';
import SideNavigation from './components/SideNavigation';
import InboxBody from './components/InboxBody';

import './index.scss';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

const App = () =>
  <div class="container" id="app">
    <div class="mail-box">
      <aside class="sm-side">
        <Profile />
        <SideNavigation />
      </aside>
      <aside class="lg-side">
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