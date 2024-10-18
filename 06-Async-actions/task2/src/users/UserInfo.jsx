import React from 'react';
import { connect } from 'react-redux';

const UserInfo = ({ userData, isFetching, error }) => {
  if (isFetching) {
    return <span className="spinner" />;
  }

  if (error) {
    return <div className="user__error">{error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img className="user__avatar" src={userData.avatar_url} alt="User Avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userData: state.users.userData,
  isFetching: state.users.isFetching,
  error: state.users.error,
});

export default connect(mapStateToProps)(UserInfo);
