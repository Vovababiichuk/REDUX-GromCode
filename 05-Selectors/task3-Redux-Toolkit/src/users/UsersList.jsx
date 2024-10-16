import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter';
import User from './User';
import { setFilterText } from './usersSlice';
import { selectFilteredUsers, selectFilteredUsersCount, selectFilterText } from './usersSelectors';

const UsersList = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(selectFilteredUsers);
  const filterText = useSelector(selectFilterText);
  const filteredUsersCount = useSelector(selectFilteredUsersCount);

  const handleFilterChange = e => {
    dispatch(setFilterText(e.target.value));
  };

  return (
    <div>
      <Filter filterText={filterText} count={filteredUsersCount} onChange={handleFilterChange} />
      <ul className="users">
        {filteredUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
