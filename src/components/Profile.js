import React from 'react';
import { connect } from 'react-redux';
import '../index.css';

const Profile = ({ profile, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.error(error);
    return <div>Error loading !</div>;
  } else {
    return (
      <div key={profile.id} className="user-head">
        <a className="inbox-avatar" href="##">
          <img width="64" hieght="60" alt="cra" src={profile.avatar} />
        </a>
        <div className="user-name">
          <h5>
            {profile.firstName} {profile.lastName}
          </h5>
          <span>{profile.email}</span>
        </div>
        <span className="mail-dropdown pull-right">
          <i className="fa fa-chevron-down"></i>
        </span>
      </div>
    );
  }
};
const mapState = (state) => ({
  profile: state.getProfile.profile,
  loading: state.getProfile.profileLoading,
  error: state.getProfile.error,
});
export default connect(mapState)(Profile);
