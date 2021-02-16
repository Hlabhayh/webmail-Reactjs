import React from 'react';
import { connect } from 'react-redux';
import Paginator from './paginator';
import '../index.css';

const InboxBody = ({ loading, error, mails, pageFrom, pageTo }) => {
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
              <input type="checkbox" className="mail-checkbox mail-group-checkbox" />
              <div className="btn-group">
                <a data-toggle="dropdown" href="##" className="btn mini all" aria-expanded="false">
                  All
                  <i className="fa fa-angle-down "></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="##"> None </a>
                  </li>
                  <li>
                    <a href="##"> Read </a>
                  </li>
                  <li>
                    <a href="##"> Unread </a>
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
                  <a href="##">
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
                  <a href="##">
                    <i className="fa fa-trash-o"></i> Delete
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-group">
              <a data-toggle="dropdown" href="##" className="btn mini blue">
                Move to
                <i className="fa fa-angle-down "></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="##">
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
                  <a href="##">
                    <i className="fa fa-trash-o"></i> Delete
                  </a>
                </li>
              </ul>
            </div>
            <Paginator totalMails={mails.length} />
          </div>
          {mails.slice(pageFrom, pageTo).map((mail) => (
            <table key={mail.id} className={mail.readAt ? 'table table-inbox table-hover read' : 'table table-inbox table-hover unread'}>
              <tbody>
                <tr className={mail.readAt ? 'read' : 'unread'}>
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells">
                    <i className="fa fa-star"></i>
                  </td>
                  <td className="view-message  dont-show">{mail.sender.name}</td>
                  <td className="view-message ">{mail.subject}</td>
                  <td className="view-message  inbox-small-cells">
                    <i className={mail.attachment ? 'fa fa-paperclip' : 'fa'}></i>
                  </td>
                  <td className="view-message  text-right">{mail.sentAt}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    );
};
const mapState = (state) => ({
  section: state.changeSection.section,
  mails: state.getMails.mails
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
  loading: state.getMails.mailsLoading,
  error: state.getMails.error,
  pageFrom: state.paginator.pageFrom,
  pageTo: state.paginator.pageTo,
});

export default connect(mapState)(InboxBody);
