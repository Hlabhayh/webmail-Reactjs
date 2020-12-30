import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div className="user-head">
        <a className="inbox-avatar" href="##">
          <img width="64" hieght="60" alt="cra" src="../assets/avatar.jpg" />
        </a>
        <div className="user-name">
          <h5>
            <a href="##" >{} {}</a>
          </h5>
          <span>
            <a href="##">{}</a>
          </span>
        </div>
        <a className="mail-dropdown pull-right" href="##">
          <i className="fa fa-chevron-down"></i>
        </a>
      </div>
    )
  }
}

export default Profile;