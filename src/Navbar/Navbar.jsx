import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useRef } from 'react';
import './index.css';
import myIcon from '../images/icon.jpg';

export const Navbar = () => {
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
          <li>
            <Link to="/home" className="link">

              Cars

            </Link>
          </li>
          <li>
            <Link to="/create-reservation" className="link">

              Booking

            </Link>
          </li>
          <li>
            <Link to="/reservations" className="link">

              Reservations

            </Link>
          </li>
          <li className="nan">
            <Link to="/add_car" className="link">
              Add A Car
            </Link>
          </li>
          <li>
            <Link to="/car-delete" className="link">
              Delete A Car
            </Link>
          </li>
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
