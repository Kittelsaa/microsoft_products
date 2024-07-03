import React from 'react';
import '../styles/Common.css';
import logo from '../assets/mcs.png';
import useri from '../assets/useri.png'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Microsoft Logo" />
      </Link>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/support">SUPPORT</Link></li>
        </ul>
      </nav>
      <div className="profile">
        <img src={useri} alt="Microsoft Logo" />
      </div>
    </header>
  );
};

export default Header;

