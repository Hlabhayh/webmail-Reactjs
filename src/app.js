import React, { useState } from 'react';

import { connect } from 'react-redux';

import Profile from './components/Profile';
import SideNavigation from './components/SideNavigation';
import InboxBody from './components/InboxBody';

const App = ({ mails }) => {
  const [section, setSection] = useState('inbox');

  const changeSection = (sec) => {
    setSection(sec);
  };
  
  const sections = [
    {
      key: 'inbox',
      label: 'Inbox',
      total: mails.filter((mail) => {
        return mail.sent === false && mail.deletedAt === null;
      }).length,
      active: section === 'inbox',
      icon: 'fa fa-inbox',
      color: 'label label-danger pull-right',
    },
    {
      key: 'sent',
      label: 'Sent Mails',
      total: mails.filter((mail) => {
        return mail.sent === true && mail.deletedAt === null;
      }).length,
      active: section === 'sent',
      icon: 'fa fa-envelope-o',
      color: 'label label-success pull-right',
    },
    {
      key: 'important',
      label: 'Important',
      total: mails.filter((mail) => {
        return mail.important === true && mail.deletedAt === null;
      }).length,
      active: section === 'important',
      icon: 'fa fa-bookmark-o',
      color: 'label label-info pull-right',
    },
    {
      key: 'trash',
      label: 'Trash',
      total: mails.filter((mail) => {
        return mail.deletedAt !== null;
      }).length,
      active: section === 'trash',
      icon: 'fa fa-inbox',
      color: 'label label-default pull-right',
    },
  ];

  return (
    <div className="container" id="app">
      <div className="mail-box">
        <aside className="sm-side">
          <Profile />
          <SideNavigation sections={sections} onChangeSection={changeSection} />
        </aside>
        <div className="lg-side">
          <InboxBody mails={mails} section={section} />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  mails: state.getMails.mails
});

export default connect(mapState)(App);
