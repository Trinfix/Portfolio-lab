import React from "react";



const ShowOrganizations = ({ organizationToShow }) => {

  return <>
    {organizationToShow.map((el, i) => (
      <div key={i} className="single-organization">
        <div>
          <h4>{el.name}</h4>
          <p>{el.target}</p>
        </div>
        <small>{el.weCollect}</small>
      </div>
    ))}
  </>
};

export default ShowOrganizations;