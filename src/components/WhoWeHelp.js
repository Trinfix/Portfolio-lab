import React, { useState, useEffect } from "react";
import decoration from "../assets/Decoration.svg";
import ShowOrganizations from './ShowOrganizations';
import Pagination from './Pagination';
import { localCollections, foundations, allOrganizations } from "../components/organizationsList";

const WhoWeHelp = () => {

  const [typeOrganization, setTypeOrganization] = useState('Fundacje');
  const [organizationToShow, setOrganizationToShow] = useState([foundations]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFoundations, setActiveFountations] = useState("");
  const [activeAllOrganizations, setActiveAllOrganizations] = useState("");
  const [activeLocalCollections, setActiveLocalCollections] = useState("");
  const [activePage, setActivePage] = useState("");

  const [organizationsPerPage, setOrganizationsPerPage] = useState(3);

  const onChangePage = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    if (typeOrganization === "Fundacje") {
      setOrganizationToShow(foundations);
      setActiveFountations("#707070");
      setActiveAllOrganizations("");
      setActiveLocalCollections("");
    } else if (typeOrganization === "Organizacje") {
      setOrganizationToShow(allOrganizations);
      setActiveFountations("");
      setActiveAllOrganizations("#707070");
      setActiveLocalCollections("");
    } else {
      setOrganizationToShow(localCollections);
      setActiveFountations("");
      setActiveAllOrganizations("");
      setActiveLocalCollections("#707070");
    };
  }, [typeOrganization]);

  const indexOfLastOrganization = currentPage * organizationsPerPage;
  const indexOfFirstOrganization = indexOfLastOrganization - organizationsPerPage;
  const currentOrganizations = organizationToShow.slice(indexOfFirstOrganization, indexOfLastOrganization);

  const handleChange = (type) => {
    setCurrentPage(1)
    setTypeOrganization(type)
  }

  return (
    <section className="who-we-help" id="who-we-help">
      <h2 className="section-title">Komu pomagamy?</h2>
      <img src={decoration} alt="decoration" width="15%" height="auto"></img>
      <ul className="organizations">
        <li style={{ borderColor: activeFoundations }} onClick={() => handleChange("Fundacje")}>Fundacjom</li>
        <li style={{ borderColor: activeAllOrganizations }} onClick={() => handleChange("Organizacje")}>Organizacjom<br />pozarządowym</li>
        <li style={{ borderColor: activeLocalCollections }} onClick={() => handleChange("Zbiórki")}>Lokalnym<br />zbiórkom</li>
      </ul>
      <div className="all-organizations">
        <p className="who-we-help-description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br />którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br />komu pomagają i czego potrzebują.</p>
        <ShowOrganizations organizationToShow={currentOrganizations} />
        <Pagination organizationsPerPage={organizationsPerPage} totalOrganizations={organizationToShow.length} changePage={onChangePage} currentPage={currentPage}/>
      </div>
    </section>
  )
}

export default WhoWeHelp;