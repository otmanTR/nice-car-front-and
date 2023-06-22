import { useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useRef } from 'react';
import './nav.css';
import { NavLink, Link } from 'react-router-dom';
import myIcon from '../images/icon.jpg';

const Navbar = () => {
  const navRef = useRef();
  useSelector((state) => state.authentication);

  const showNavBar = () => {
    if (window.innerWidth < 680) {
      navRef.current.classList.toggle('responsive_nav');
    }
  };

  const hideNavBar = () => {
    if (window.innerWidth < 680) {
      navRef.current.classList.toggle('responsive_nav');
    }
  };

  return (
    <div className="headnavbar" ref={navRef}>
      <button type="button" className="nav-btn nav-open-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <nav className="navbar">
        <button type="button" className="nav-btn nav-close-btn" onClick={hideNavBar}>
          <FaTimes />
        </button>
        <img className="title" src={myIcon} alt="Rent It icon" />
        <ul className="navbarlinks">
          <Link to="/" className="link">
            <li>
              Cars
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              Reservations
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              ADD A CAR
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              DELETE A CAR
            </li>
          </Link>
          <NavLink onClick={hideNavBar} to="/signin" activeClassName="active">
            <button
              type="button"
              style={{
                backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', display: 'block', marginBottom: '10px',
              }}
            >
              SIGN IN
            </button>
          </NavLink>

          <NavLink onClick={hideNavBar} to="/signout" activeClassName="active">
            <button
              type="button"
              style={{
                backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', display: 'block', marginBottom: '10px',
              }}
            >
              SIGN OUT
            </button>
          </NavLink>

        </ul>
        <h3 className="navbar__footer">
          &copy;
          {' '}
          {new Date().getFullYear()}
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
