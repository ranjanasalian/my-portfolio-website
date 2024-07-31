import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./MainNavigation.css";

function MainNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Ranjana Poojary
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="about"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="projects"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
