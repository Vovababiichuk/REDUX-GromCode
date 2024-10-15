// import React from 'react';

// const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const isPrevPageAvailable = currentPage > 1;
//   const isNextPageAvailable = currentPage < totalPages;

//   return (
//     <div className="pagination">
//       <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
//         {isPrevPageAvailable && '←'}
//       </button>
//       <span className="pagination__page">{currentPage}</span>
//       <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
//         {isNextPageAvailable && '→'}
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

  const prevButtonText = isPrevPageAvailable ? '←' : '';
  const nextButtonText = isNextPageAvailable ? '→' : '';

  return (
    <div className="pagination">
      <button
        className={`btn ${!isPrevPageAvailable ? 'disabled' : ''}`}
        onClick={goPrev}
        disabled={!isPrevPageAvailable}
      >
        {prevButtonText}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button
        className={`btn ${!isNextPageAvailable ? 'disabled' : ''}`}
        onClick={goNext}
        disabled={!isNextPageAvailable}
      >
        {nextButtonText}
      </button>
    </div>
  );
};

export default Pagination;
