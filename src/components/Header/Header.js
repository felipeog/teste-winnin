import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">
          React<span className="header__title--accent">JS</span>
        </h1>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                className="button navigation__button"
                activeClassName="button--active"
                to="/hot"
              >
                Hot
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink
                className="button navigation__button"
                activeClassName="button--active"
                to="/new"
              >
                New
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink
                className="button navigation__button"
                activeClassName="button--active"
                to="/rising"
              >
                Rising
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
