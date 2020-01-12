import React from 'react'
import { Navigation } from 'components'

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      React<span className="header__title--accent">JS</span>
    </h1>

    <Navigation />
  </header>
)

export default Header
