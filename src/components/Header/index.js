import React, { Component } from 'react'
import { Navigation } from 'components'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">
          React<span className="header__title--accent">JS</span>
        </h1>

        <Navigation />
      </header>
    )
  }
}

export default Header
