import React from 'react';
import headerContentPicture from "../assets/Decoration.svg";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
const Header = () => {

  return (
    <header id="header">
      <div className="header-picture"></div>
      <div className="header-content">
        <div className="menu-buttons">
          <NavLink to="/rejestracja"><button>Załóż konto</button></NavLink>
          <NavLink to="/logowanie"><button>Zaloguj</button></NavLink>
        </div>
        <div className="menu">
          <ul>
            <Link id="header">
              <li>Start</li>
            </Link>
            <Link to="three-columns">
              <li>O co chodzi?</li>
            </Link>
            <Link to="about-us">
              <li>O nas</li>
            </Link>
            <Link to="who-we-help">
              <li>Fundacje i organizacje</li>
            </Link>
            <Link to="contact">
              <li>Kontakt</li>
            </Link>
          </ul>
        </div>
        <div className="header-start-help">
          <h2 className="section-title">Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce </h2>
          <div className="header-content-picture">
            <img src={headerContentPicture} width="80%" height="auto" alt="decoration"></img>
          </div>
          <div className="header-buttons">
          <NavLink to="/logowanie"><button className="give-button">Oddaj<br />rzeczy</button></NavLink>
          <NavLink to="/logowanie"><button className="arrange-button">Zorganizuj<br />zbiórkę</button></NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header