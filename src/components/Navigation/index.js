import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
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
)

export default Navigation
