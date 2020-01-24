import styled from '@emotion/styled'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled('nav')`
  padding: 1rem;
  background-color: ${(props) => props.theme.navigation.background};
`

export const NavList = styled('ul')`
  display: flex;
  justify-content: center;
`

export const NavItem = styled('li')`
  &:not(:first-child) {
    margin-left: 0.4rem;
  }
`

export const NavLink = styled(Link)`
  ${(props) => props.theme.button.default};
  text-transform: uppercase;

  &.isActive,
  &:hover {
    background-color: ${(props) => props.theme.color.accent};
  }
`
