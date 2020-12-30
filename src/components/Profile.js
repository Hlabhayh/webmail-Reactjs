import React from 'react';
import { connect } from 'react-redux';
import '../index.scss';

const Profile = ({
  profile,
  loading,
  error
}) => {
  if (loading) {
    return <div>Loading...</div>
  } else if (error) {
    return console.error(error)
  } else {
    return (
      <div key={profile.id} className="user-head">
        <a className="inbox-avatar" href="##">
          <img width="64" hieght="60" alt="cra" src={profile.avatar} />
        </a>
        <div className="user-name">
          <h5>
            <a href="##" >{profile.firstName} {profile.lastName}</a>
          </h5>
          <span>
            <a href="##">{profile.email}</a>
          </span>
        </div>
        <a className="mail-dropdown pull-right" href="##">
          <i className="fa fa-chevron-down"></i>
        </a>
      </div>
    )
  }
}
const mapState = state => ({
  profile: state.profile,
  loading: state.profileLoading,
  error: state.error,
})
export default connect(mapState)(Profile);