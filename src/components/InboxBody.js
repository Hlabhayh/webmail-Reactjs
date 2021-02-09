import { connect } from 'react-redux';
import '../index.scss'

const InboxBody = ({
  mails,
  loading,
  error,
}) => {
  if(loading) {
    return <div>LOADING...</div>
  }else if (error) {
    return console.error(error)
  }else
  return (
    <div>
      <div className="inbox-head">
        <h3>Inbox</h3>
        <form action="#" className="pull-right position">
          <div className="input-append">
            <input type="text" className="sr-input" placeholder="Search Mail" />
            <button className="btn sr-btn" type="button"><i className="fa fa-search"></i></button>
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
                <li><a href="##"> None</a></li>
                <li><a href="##"> Read</a></li>
                <li><a href="##"> Unread</a></li>
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
              <li><a href="##"><i className="fa fa-pencil"></i> Mark as Read</a></li>
              <li><a href="##"><i className="fa fa-ban"></i> Spam</a></li>
              <li className="divider"></li>
              <li><a href="##"><i className="fa fa-trash-o"></i> Delete</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <a data-toggle="dropdown" href="##" className="btn mini blue">
              Move to
              <i className="fa fa-angle-down "></i>
            </a>
            <ul className="dropdown-menu">
              <li><a href="##"><i className="fa fa-pencil"></i> Mark as Read</a></li>
              <li><a href="##"><i className="fa fa-ban"></i> Spam</a></li>
              <li className="divider"></li>
              <li><a href="##"><i className="fa fa-trash-o"></i> Delete</a></li>
            </ul>
          </div>

          <ul className="unstyled inbox-pagination">
            <li><span>1-50 of 234</span></li>
            <li>
              <a className="np-btn" href="##"><i className="fa fa-angle-left  pagination-left"></i></a>
            </li>
            <li>
              <a className="np-btn" href="##"><i className="fa fa-angle-right pagination-right"></i></a>
            </li>
          </ul>
        </div>
        {mails.map(mail => (
        <table key={mail.id} className="table table-inbox table-hover">
          <tbody>
            <tr className="unread">
              <td className="inbox-small-cells">
                <input type="checkbox" className="mail-checkbox" />
              </td>
              <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
              <td className="view-message  dont-show">{mail.sender.name}</td>
              <td className="view-message ">{mail.subject}</td>
              <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
              <td className="view-message  text-right">{mail.sentAt}</td>
            </tr>
          </tbody>
        </table>
        ))}
      </div>
    </div>
  )
}

const mapState = state => ({
  mails: state.mails,
  loading: state.mailsLoading,
  error: state.error,
})

export default connect(mapState)(InboxBody);