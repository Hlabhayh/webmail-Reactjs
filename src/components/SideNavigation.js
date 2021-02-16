import React from 'react';
import { connect } from 'react-redux';
import { changeSection } from '../store/actions/actions';
import '../index.css';

function SideNavigation({ sections, changeSection }) {

  return (
    <div>
      <ul className="inbox-nav inbox-divider">
        {sections.map((sec) => (
          <li key={sec.key} className={sec.active ? 'active' : 'inactive'}>
            <a href="##" onClick={() => changeSection(sec.key)}>
              <i className={sec.icon}></i>
              {sec.label}
              <span className={sec.color}> {sec.total} </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="inbox-body text-center">
        <div className="btn-group">
          <span className="btn mini btn-primary">
            <i className="fa fa-plus"></i>
          </span>
        </div>
        <div className="btn-group">
          <span className="btn mini btn-success">
            <i className="fa fa-phone"></i>
          </span>
        </div>
        <div className="btn-group">
          <span className="btn mini btn-info">
            <i className="fa fa-cog"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
const mapState = (state) => ({

  sections: [
    {
      key: 'inbox',
      label: 'Inbox',
      total: state.getMails.mails.filter((mail) => {
        return mail.sent === false && mail.deletedAt === null;
      }).length,
      active: state.changeSection.section === 'inbox',
      icon: 'fa fa-inbox',
      color: 'label label-danger pull-right',
    },
    {
      key: 'sent',
      label: 'Sent Mails',
      total: state.getMails.mails.filter((mail) => {
        return mail.sent === true && mail.deletedAt === null;
      }).length,
      active: state.changeSection.section === 'sent',
      icon: 'fa fa-envelope-o',
      color: 'label label-success pull-right',
    },
    {
      key: 'important',
      label: 'Important',
      total: state.getMails.mails.filter((mail) => {
        return mail.important === true && mail.deletedAt === null;
      }).length,
      active: state.changeSection.section === 'important',
      icon: 'fa fa-bookmark-o',
      color: 'label label-info pull-right',
    },
    {
      key: 'trash',
      label: 'Trash',
      total: state.getMails.mails.filter((mail) => {
        return mail.deletedAt !== null;
      }).length,
      active: state.changeSection.section === 'trash',
      icon: 'fa fa-inbox',
      color: 'label label-default pull-right',
    },
  ],
});

const mapDispatch = (dispatch) => ({
  changeSection: (sec) => dispatch(changeSection(sec)),
});

export default connect(mapState, mapDispatch)(SideNavigation);
