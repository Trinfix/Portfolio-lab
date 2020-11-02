import React, {useState, useEffect} from 'react';

const Header = () => {

  return (
    <header>
      <div className="menu">
        <ul>
          <li>Start</li>
          <li>O co chodzi?</li>
          <li>O nas</li>
          <li>Fundacje i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>
      <h2>Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce </h2>
      <div className="header-buttons">
        <button>Oddaj rzeczy</button>
        <button>Zorganizuj zbiórkę</button>
      </div>
    </header>
  )
}

export default Header