import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser } from './users.actions';

const Users = () => {
  const users = useSelector(state => state.userList);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const id = Math.round(Math.random() * 1000000);
    dispatch(addUser({ id: id, name: `User # ${id}` }));
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={handleAddUser}>
        Create user
      </button>
      <ul className="users__list">
        {users.map(user => (
          <li className="users__list-item" key={user.id}>
            <span>{user.name}</span>
            <button className="users__delete-btn" onClick={() => dispatch(deleteUser(user.id))}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
