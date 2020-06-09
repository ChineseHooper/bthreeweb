import React from "react";
import './Header.css';
import { NavLink as Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../img/logo.png';

function Header() {
  return (
    <nav>
      <div id="header" className="header-container">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <ul>
          <li className="nav-item">
            <Link exact to="/" activeClassName="selected">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" activeClassName="selected">Products</Link>
          </li>
          <li className="nav-item">
            <NavHashLink smooth to="/#team">Team</NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink smooth to="/products#faq">FAQ</NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink smooth to="/#contact">Contact Us</NavHashLink>
          </li>
        </ul>
        <div className="nav-item-account">
          <Link to="/login">
            <div className="login-btn">Log in</div>
          </Link>
          <Link to="/register">
            <div className="register-btn">Start now</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default Header;