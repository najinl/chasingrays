import React from 'react';
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

return(
    <header>
      <div className="logo">
        <div className="top-logo">
          <p className="app-name">RAY</p>
          <div className="sun-img"></div>
        </div>
        <div className="bottom-logo">
          <p>CHASING</p>
        </div>
      </div>
      <section className="nav-container">
        <Link className="favorites-btn" to="/favorites">
          <AiFillHeart size={42}/>
        </Link>
        <Link className="home-btn" to="/">
          <AiFillHome size={50}/>
        </Link>
      </section>
    </header>
  )
}

export default Header;
