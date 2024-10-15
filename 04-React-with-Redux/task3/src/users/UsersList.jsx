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
import { setCurrentPage } from './users.actions';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({ users, currentPage, itemsPerPage, goPrev, goNext }) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = users.slice(startIndex, endIndex);

  return (
    <ul className="users">
      <Pagination
        goPrev={() => goPrev(currentPage)}
        goNext={() => goNext(currentPage, users.length, itemsPerPage)}
        currentPage={currentPage + 1}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      {usersToDisplay.map(user => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    users: state.usersList,
    currentPage: state.currentPage,
    itemsPerPage: 3,
  };
};

const mapDispatchToProps = dispatch => ({
  goPrev: currentPage => {
    console.log('goPrev clicked, currentPage:', currentPage);
    if (currentPage > 0) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  },
  goNext: (currentPage, totalUsers, itemsPerPage) => {
    const totalPages = Math.ceil(totalUsers / itemsPerPage);
    if (currentPage < totalPages - 1) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
