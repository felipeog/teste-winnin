import { Navigation } from 'components'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Header = () => (
  <header
    css={(theme) => css`
      background-color: ${theme.header.background};
      position: fixed;
      top: 0;
      width: 100%;
    `}
  >
    <h1
      css={(theme) => css`
        font-size: 1.6rem;
        color: ${theme.header.text};
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        padding: 1.6rem;
      `}
    >
      React
      <span
        css={(theme) => css`
          color: ${theme.color.accent};
        `}
      >
        JS
      </span>
    </h1>

    <Navigation />
  </header>
)

export default Header
