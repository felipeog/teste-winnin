/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Container, NavList, NavItem, NavLink } from './styles'

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
  <Container>
    <NavList>
      {navLinks.map((navLink) => (
        <NavItem>
          <NavLink activeClassName="isActive" to={navLink.to}>
            {navLink.label}
          </NavLink>
        </NavItem>
      ))}
    </NavList>
  </Container>
)

export default Navigation
