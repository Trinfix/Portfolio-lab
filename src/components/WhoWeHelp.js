import React, { useState, useEffect } from "react";
import decoration from "../assets/Decoration.svg";

const WhoWeHelp = () => {

  return (
    <section className="who-we-help" id="who-we-help">
      <h2 className="section-title">Komu pomagamy?</h2>
      <img src={decoration} alt="decoration" width="15%" height="auto"></img>
      <ul className="organizations">
        <li>Fundacjom</li>
        <li>Organizacjom<br />pozarządowym</li>
        <li>Lokalnym<br />zbiórkom</li>
      </ul>
      <div className="all-organizations">
        <p className="who-we-help-description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br />którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br />komu pomagają i czego potrzebują.</p>
        <div className="single-organization">
          <div>
            <h4>Fundacja “Dbam o Zdrowie”</h4>
            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
          </div>
          <small>ubrania, jedzenie, sprzęt AGD, meble, zabawki</small>
        </div>
        <div className="single-organization">
          <div>
            <h4>Fundacja “Dla dzieci”</h4>
            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
          </div>
          <small>ubrania, meble, zabawki</small>
        </div>
        <div className="single-organization">
          <div>
            <h4>Fundacja “Bez domu”</h4>
            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
          </div>
          <small>ubrania, jedzenie, ciepłe koce</small>
        </div>
        <ul className="pagination">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </section>
  )
}

export default WhoWeHelp;