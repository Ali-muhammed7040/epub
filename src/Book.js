// // Book.js

// import React, { useState } from "react";
// import "./Book.css";
// import { log } from "util";

// const Book = ({ chapters }) => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleNextPage = () => {
//     if (currentPage < chapters?.length - 1) {
//       console.log(chapters?.length - 1, "length");
//       setCurrentPage(currentPage + 1);
//       console.log(currentPage, "currentPage");
//     }
//   };
//   const handleBackPage = () => {
//     if (currentPage < chapters?.length - 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div>
//       <div className='book-container'>
//         <div className='book'>
//           <div
//             className='page'
//             dangerouslySetInnerHTML={{
//               __html: chapters[currentPage]?.chapterbody,
//             }}
//           ></div>
//           <div
//             className='page'
//             dangerouslySetInnerHTML={{
//               __html: chapters[currentPage + 1]?.chapterbody,
//             }}
//           ></div>
//         </div>
//       </div>
//       <button
//         className='buttons'
//         onClick={handleNextPage}
//         disabled={currentPage === chapters?.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Book;

// Book.js

// Book.js

import React, { useState } from "react";
import "./Book.css";
import { log } from "util";

const Book = ({ chapters }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < chapters?.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBackPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPages = () => {
    const currentPageContent = chapters[currentPage]?.chapterbody;
    const nextPageContent = chapters[currentPage + 1]?.chapterbody;

    if (nextPageContent && currentPageContent.length > 500) {
      // If current page content is too long, split it into two pages
      const halfwayIndex = Math.floor(currentPageContent.length / 2);
      const firstHalf = currentPageContent.substring(0, halfwayIndex);
      const secondHalf = currentPageContent.substring(halfwayIndex);

      return (
        <React.Fragment>
          <div
            className='page'
            dangerouslySetInnerHTML={{ __html: firstHalf }}
          ></div>
          <div
            className='page'
            dangerouslySetInnerHTML={{ __html: secondHalf }}
          ></div>
        </React.Fragment>
      );
    } else {
      // Otherwise, display the content on one page
      return (
        <div
          className='page'
          dangerouslySetInnerHTML={{ __html: currentPageContent }}
        ></div>
      );
    }
  };

  return (
    <div>
      <div className='book-container'>
        <div className='book'>{renderPages()}</div>
      </div>
      <div>
        <button
          className='buttons'
          onClick={handleBackPage}
          disabled={currentPage === 0}
        >
          Back
        </button>
        <button
          className='buttons'
          onClick={handleNextPage}
          disabled={currentPage === chapters?.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Book;
