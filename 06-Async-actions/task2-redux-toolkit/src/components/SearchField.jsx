import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../store/usersSlice';

const SearchField = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    dispatch(fetchUserData(username));
  };

  return (
    <div className="name-form">
      <form onSubmit={handleSubmit}>
        <input type="text" className="name-form__input" name="username" />
        <button className="name-form__btn btn" type="submit">
          Show
        </button>
      </form>
    </div>
  );
};

export default SearchField;
