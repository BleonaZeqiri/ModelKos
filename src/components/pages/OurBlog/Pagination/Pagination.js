import React from "react";
import "./Pagination.scss";
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? "paginationActive" : ""}>
          <a
            role="button"
            tabIndex="0"
            aria-label={`Page ${i}`}
            onClick={() => handlePageChange(i)}
            onKeyDown={(e) => e.key === "Enter" && handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }

    if (totalPages > 3) {
      pageNumbers.push(
        <li key="ellipsis">
          {" "}
          <a>...</a>
        </li>
      );
    }

    if (totalPages > 3) {
      pageNumbers.push(
        <li
          key={totalPages}
          className={totalPages === currentPage ? "paginationActive" : ""}
        >
          <a
            role="button"
            tabIndex="0"
            aria-label={`Page ${totalPages}`}
            onClick={() => handlePageChange(totalPages)}
            onKeyDown={(e) => e.key === "Enter" && handlePageChange(totalPages)}
          >
            {totalPages}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <ul className="paginationBttns" role="navigation" aria-label="Pagination">
      <li className="previous">
        <a
          className="previousBttn"
          tabIndex="0"
          role="button"
          aria-disabled={currentPage === 1}
          aria-label="Previous page"
          onClick={() => handlePageChange(currentPage - 1)}
          onKeyDown={(e) =>
            e.key === "Enter" && handlePageChange(currentPage - 1)
          }
        >
          {"<"}
        </a>
      </li>
      {renderPageNumbers()}
      <li className="next">
        <a
          className="nextBttn"
          tabIndex="0"
          role="button"
          aria-disabled={currentPage === totalPages}
          aria-label="Next page"
          onClick={() => handlePageChange(currentPage + 1)}
          onKeyDown={(e) =>
            e.key === "Enter" && handlePageChange(currentPage + 1)
          }
        >
          {">"}
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
