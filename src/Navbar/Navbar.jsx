import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useRef } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import myIcon from '../../images/icon.jpg';

const Navbar = () => {
  const navRef = useRef();
  const { token, isLoading } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

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
            <NavLink onClick={hideNavBar} to="cars" activeClassName="active">
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink onClick={hideNavBar} to="my-reservations" activeClassName="active">
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink onClick={hideNavBar} to="add" activeClassName="active">
              Add A Car
            </NavLink>
          </li>
          <li>
            <NavLink onClick={hideNavBar} to="delete" activeClassName="active">
              Delete A Car
            </NavLink>
          </li>
          {(!token || token.length <= 0 || isLoading) || (
            <li>
              <button className="nav__logout" type="button" onClick={handleClick}>
                Logout
              </button>
            </li>
          )}
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
