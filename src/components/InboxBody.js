import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Paginator from './paginator';
import '../index.css';

const InboxBody = ({ loading, error, mails, section }) => {
  const [mailsPerPage] = useState(17);
  const [pagination, setPagination] = useState({
    from: 0,
    to: 17,
  });

  const [filteredMails, setFilteredMails] = useState([]);

  const onPageChange = (from, to) => {
    setPagination({ from: from, to: to });
  };

  console.log(section);

  useEffect(() => {
    setFilteredMails(
      mails.filter((m) => {
        switch (section) {
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
      }),
    );
  }, [mails, section]);

  if (loading) {
    return <div>LOADING...</div>;
  } else if (error) {
    return console.error(error);
  } else
    return (
      <div>
        <div className="inbox-head">
          <h3>Inbox</h3>
          <form action="#" className="pull-right position">
            <div className="input-append">
              <input type="text" className="sr-input" placeholder="Search Mail" />
              <button className="btn sr-btn" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
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
                    <a href="##"> None</a>
                  </li>
                  <li>
                    <a href="##"> Read</a>
                  </li>
                  <li>
                    <a href="##"> Unread</a>
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

            <Paginator mailsPerPage={mailsPerPage} onPageChange={onPageChange} totalMails={filteredMails.length} pagination={pagination} />
          </div>
          {filteredMails
            .sort((a, b) => (a.sentAt < b.sentAt ? 1 : -1))
            .slice(pagination.from, pagination.to)
            .map((mail) => (
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
  loading: state.getMails.mailsLoading,
  error: state.getMails.error,
});

export default connect(mapState)(InboxBody);
