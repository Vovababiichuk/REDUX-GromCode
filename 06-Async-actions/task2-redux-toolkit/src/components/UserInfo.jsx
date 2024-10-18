import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { userData, isFetching, error } = useSelector(state => state.users);

  if (isFetching) {
    return <span className="spinner"></span>;
  }

  if (error) {
    return <div className="user__error">{error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

export default UserInfo;
