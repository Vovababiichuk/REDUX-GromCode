// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentPage } from './users.actions';
// import User from './User';
// import Pagination from './Pagination';

// const UsersList = () => {
//   const { usersList, currentPage } = useSelector(state => state);
//   const dispatch = useDispatch();

//   const itemsPerPage = 3;
//   const totalItems = usersList.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handleGoPrev = () => {
//     if (currentPage > 0) {
//       dispatch(setCurrentPage(currentPage - 1));
//     }
//   };

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const usersToDisplay = usersList.slice(startIndex, endIndex);

//   const handleGoNext = () => {
//     if (currentPage < totalPages - 1) {
//       dispatch(setCurrentPage(currentPage + 1));
//     }
//   };

//   return (
//     <div>
//       <Pagination
//         goPrev={handleGoPrev}
//         goNext={handleGoNext}
//         currentPage={currentPage + 1}
//         totalItems={totalItems}
//         itemsPerPage={itemsPerPage}
//       />
//       <ul className="users">
//         {usersToDisplay.map(user => (
//           <User key={user.id} name={user.name} age={user.age} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;

import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';

const UsersList = ({ users, currentPage, itemsPerPage, goPrev, goNext }) => {
  const displayUser = users.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <ul className="users">
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        goPrev={goPrev}
        goNext={goNext}
      />
      {displayUser.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  users: state.users.usersList,
  currentPage: state.currentPage,
  itemsPerPage: 3,
});

const mapDispatchToProps = {
  goPrev: usersActions.goPrevPage,
  goNext: usersActions.goNextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
