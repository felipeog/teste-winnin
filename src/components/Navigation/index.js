/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Nav, NavList, NavItem, NavLink } from './styles'

const navLinks = [
  {
    label: 'Hot',
    to: 'hot',
  },
  {
    label: 'New',
    to: 'new',
  },
  {
    label: 'Rising',
    to: 'rising',
  },
]

const Navigation = () => (
  <Nav>
    <NavList>
      {navLinks.map((navLink) => (
        <NavItem>
          <NavLink activeClassName="isActive" to={navLink.to}>
            {navLink.label}
          </NavLink>
        </NavItem>
      ))}
    </NavList>
  </Nav>
)

export default Navigation
