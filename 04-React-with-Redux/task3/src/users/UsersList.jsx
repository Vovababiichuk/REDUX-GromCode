import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from './users.actions';
import User from './User';
import Pagination from './Pagination';

const UsersList = () => {
  const { usersList, currentPage } = useSelector(state => state);
  const dispatch = useDispatch();

  const itemsPerPage = 3;
  const totalItems = usersList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleGoPrev = () => {
    if (currentPage > 0) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = usersList.slice(startIndex, endIndex);

  const handleGoNext = () => {
    if (currentPage < totalPages - 1) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div>
      <Pagination
        goPrev={handleGoPrev}
        goNext={handleGoNext}
        currentPage={currentPage + 1}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
