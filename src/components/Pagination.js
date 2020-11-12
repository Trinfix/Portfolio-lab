import React from "react";

const Pagination = ({organizationsPerPage, totalOrganizations, changePage, currentPage}) => {

  const pageNumber = [];
  for(let i = 1; i <= Math.ceil(totalOrganizations / organizationsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className="pagination">
      
      {pageNumber.length <= 1 ? <li></li> : pageNumber.map((number) =>( 
        <li style={{borderColor: currentPage === number ? "#707070" : ""}} key={number.toString()} value={number} onClick={(e) => changePage(e.target.value)}>{number}</li>
      ))}
    </ul>
  )
};

export default Pagination;