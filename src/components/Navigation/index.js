import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const tabs = [
  {
    label: 'Hot',
    value: 'hot',
  },
  {
    label: 'New',
    value: 'new',
  },
  {
    label: 'Rising',
    value: 'rising',
  },
]

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      {tabs.map(({ label, value }) => (
        <li key={value} className="navigation__item">
          <NavLink
            className="button navigation__button"
            activeClassName="button--active"
            to={`/${value}`}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation
