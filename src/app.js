import React from 'react';
import Profile from './components/Profile';
import SideNavigation from './components/SideNavigation';
import InboxBody from './components/InboxBody';
import Compose from './components/compose';
import SearchBar from './components/searchBar';

const App = () => {
  return (
    <div className="container" id="app">
      <div className="mail-box">
        <aside className="sm-side">
          <Profile />
          <Compose />
          <SideNavigation />
        </aside>
        <div className="lg-side">
          <SearchBar />
          <InboxBody />
        </div>
      </div>
    </div>
  );
};

export default App;
