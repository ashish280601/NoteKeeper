import React from "react";

const Pagination = ({
  prePage,
  numbers,
  currentPage,
  changeCPage,
  nextPage,
}) => {
  return (
    <div>
      <nav style={styling.container}>
        <ul className="pagination">
          <li className="page-item">
            <a href="/#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((num, index) => (
            <li
              className={`page-item ${currentPage === num ? "active" : ""}`}
              key={index}
            >
              <a
                href="/#"
                className="page-link"
                onClick={() => changeCPage(num)}
              >
                {num}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="/#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

const styling ={
    container:{
        marginLeft:"45%",
        cursor:'pointer',
    }
}
