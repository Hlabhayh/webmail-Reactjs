import React from 'react';
import { connect } from 'react-redux';
import Paginator from './paginator';
import { readMail, markAsRead, unreadMail, removeMail, importantMail, markSelectedAsRead, handleChange, handleCheckAll, handleDeleteSelected, showReadMails, showAllMails, showUnreadMails } from '../store/actions/actions';
import '../index.css';

const InboxBody = ({
  loading,
  error,
  mails,
  pageFrom,
  pageTo,
  openMail,
  selectedMail,
  closeMail,
  markAsUnread,
  deleteMail,
  importantMail,
  markCheckedAsRead,
  handleChange,
  checkAll,
  deleteSelected,
  allChecked,
  showReadMails,
  showAllMails,
  showUnreadMails,
  value,
}) => {
  if (loading) {
    return <div>LOADING...</div>;
  } else if (error) {
    return console.error(error);
  } else
  return (
      <div>
        <div className="inbox-body">
          <div className="mail-option">
            <div className="chk-all">
              <input type="checkbox" onClick={() => checkAll(mails)} className="mail-checkbox mail-group-checkbox" />
              <div className="btn-group">
                <a data-toggle="dropdown" href="##" className="btn mini all" aria-expanded="false">
                  All
                  <i className="fa fa-angle-down "></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="##" onClick={() => showAllMails()}> None </a>
                  </li>
                  <li>
                    <a href="##" onClick={()=> showReadMails()}> Read </a>
                  </li>
                  <li>
                    <a href="##" onClick={() => showUnreadMails()}> Unread </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-group">
              <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="##" className="btn mini tooltips">
                <i className=" fa fa-refresh"></i>
              </a>
            </div>
            <div className="btn-group hidden-phone">
              <a data-toggle="dropdown" href="##" className="btn mini blue" aria-expanded="false">
                More
                <i className="fa fa-angle-down "></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="##" onClick={() => markCheckedAsRead(value)}>
                    <i className="fa fa-pencil"></i> Mark as Read
                  </a>
                </li>
                <li>
                  <a href="##">
                    <i className="fa fa-ban"></i> Spam
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="##" onClick={() => deleteSelected(value)}>
                    <i className="fa fa-trash-o"></i> Delete
                  </a>
                </li>
              </ul>
            </div>
            <Paginator totalMails={mails.length} />
          </div>
          {selectedMail ? (
            <div key={selectedMail.id} className="table table-inbox table-hover">
              <div className="message-box">
                <div className="message-options">
                  <button className="btn btn-primary" onClick={() => closeMail(selectedMail)}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
                  </button>
                  <button className="btn btn-success" onClick={() => markAsUnread(selectedMail)}>
                    <span className="glyphicon glyphicon-envelope"></span> mark as unread
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteMail(selectedMail)}>
                    <span className="btn-label">
                      <i className="glyphicon glyphicon-trash"></i>
                    </span>
                    Delete
                  </button>
                </div>
                <p>
                  <strong>From: </strong>
                  {selectedMail.sender.name}
                </p>
                <p>
                  <strong>Date: </strong>
                  {selectedMail.sentAt}
                </p>
                <p>
                  <strong>Message :</strong>
                  {selectedMail.content}
                </p>
                <hr></hr>
                <div className="message"></div>
                <div>
                  <h4>{selectedMail.attachment}</h4>
                  <ul></ul>
                </div>
              </div>
            </div>
          ) : (
            mails.slice(pageFrom, pageTo).map((mail) => (
              <table key={mail.id} className={mail.readAt ? 'table table-inbox table-hover read' : 'table table-inbox table-hover unread'}>
                <tbody>
                  <tr className={mail.readAt ? 'read' : 'unread'}>
                    <td className="inbox-small-cells">
                      <input className="mail-checkbox" checked={allChecked === true ? true : null} type="checkbox" onChange={(e) => handleChange(mail, e)} />
                    </td>
                    <td className="inbox-small-cells">
                      <i className={mail.important ? 'fa fa-star inbox-started' : 'fa fa-star'} onClick={() => importantMail(mail)}></i>
                    </td>
                    <td className="view-message dont-show">{mail.sender.name}</td>
                    <td className="view-message" onClick={() => openMail(mail)}>
                      {mail.subject}
                    </td>
                    <td className="view-message  inbox-small-cells">
                      <i className={mail.attachment ? 'fa fa-paperclip' : 'fa'}></i>
                    </td>
                    <td className="view-message  text-right">{mail.sentAt}</td>
                  </tr>
                </tbody>
              </table>
            ))
          )}
        </div>
      </div>
    );
};
const mapState = (state) => ({
  section: state.changeSection.section,
  mails: state.handleMails.mails
    .filter((m) => {
      switch (state.changeSection.section) {
        case 'inbox':
          return !m.sent && !m.deletedAt;
        case 'sent':
          return m.sent && !m.deletedAt;
        case 'important':
          return m.important && !m.deletedAt;
        case 'trash':
          return m.deletedAt;
        default:
          return m;
      }
    })
    .filter((m) => {
      if (!state.search.keyword) {
        return m;
      }
      return m.sender.name.toLowerCase().includes(state.search.keyword);
    })
    .sort((a, b) => (a.sentAt < b.sentAt ? 1 : -1)),
  loading: state.handleMails.mailsLoading,
  error: state.handleMails.error,
  pageFrom: state.paginator.pageFrom,
  pageTo: state.paginator.pageTo,
  selectedMail: state.handleMails.selectedMail,
  value: state.handleMails.value,
  allChecked: state.handleMails.allChecked,
});

const mapDispatch = (Dispatch) => ({
  openMail: (e) => Dispatch(readMail(e)),
  closeMail: (e) => Dispatch(markAsRead(e)),
  markAsUnread: (e) => Dispatch(unreadMail(e)),
  deleteMail: (e) => Dispatch(removeMail(e)),
  importantMail: (e) => Dispatch(importantMail(e)),
  markCheckedAsRead: (e) => Dispatch(markSelectedAsRead(e)),
  handleChange: (m, e) => Dispatch(handleChange(m, e)),
  checkAll: (e) => Dispatch(handleCheckAll(e)),
  deleteSelected: (v) => Dispatch(handleDeleteSelected(v)),
  showReadMails: () => Dispatch(showReadMails()),
  showAllMails: () => Dispatch(showAllMails()),
  showUnreadMails: () => Dispatch(showUnreadMails()),
});

export default connect(mapState, mapDispatch)(InboxBody);
