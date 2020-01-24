import styled from '@emotion/styled'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled('nav')`
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
  font-size: 1rem;
  padding: 0.8rem;
  display: inline-block;
  background-color: ${(props) => props.theme.button.background};
  border: none;
  border-radius: 0.4rem;
  width: 10rem;
  color: ${(props) => props.theme.button.text};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 200ms;
  text-transform: uppercase;

  &.isActive,
  &:hover {
    background-color: ${(props) => props.theme.color.accent};
  }
`
