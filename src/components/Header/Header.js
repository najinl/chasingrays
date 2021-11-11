import React from 'react';
import './Header.css';


const Header = () => {
  return(
    <header>
      <div className="logo">
        <div className="top-logo">
          <p>RAY</p>
          <div className="sun-img"></div>
        </div>
        <div className="bottom-logo">
          <p>CHASING</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
