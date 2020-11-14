import React from "react";
import {NavLink} from "react-router-dom";
import simpleStepsPicture from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";

const SimpleSteps = () => {

  return (
    <section className="simple-steps">
      <h2 className="section-title">Wystarczą 4 proste kroki</h2>
      <img src={simpleStepsPicture} alt="decoration" width="15%" height="auto"></img>
      <div className="all-steps">
        <article className="one-step">
          <img src={icon1} alt="shirt" width="45%" height="45%"></img>
          <h3>Wybierz rzeczy</h3>
          <hr></hr>
          <p>ubrania, zabawki, <br /> sprzęt i inne</p>
        </article>
        <article className="one-step">
          <img src={icon2} alt="bag" width="45%" height="45%"></img>
          <h3>Spakuj je</h3>
          <hr></hr>
          <p>skorzystaj z <br /> worków na śmieci</p>
        </article>
        <article className="one-step">
          <img src={icon3} alt="magnifier" width="45%" height="45%"></img>
          <h3>Zdecyduj komu <br /> chcesz pomóc</h3>
          <hr></hr>
          <p>wybierz zaufane <br /> miejsce</p>
        </article>
        <article className="one-step">
          <img src={icon4} alt="circle with arrows" width="45%" height="45%"></img>
          <h3>Zamów kuriera</h3>
          <hr></hr>
          <p>kurier przyjedzie <br /> w dogodnym terminie</p>
        </article>
      </div>
      <NavLink to="/logowanie"><button className="give-button">ODDAJ <br /> RZECZY</button></NavLink>
    </section>
  )
}

export default SimpleSteps;