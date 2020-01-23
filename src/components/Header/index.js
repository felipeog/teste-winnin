/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Navigation } from 'components'

const Header = () => {
  const theme = useTheme()

  return (
    <header
      css={css`
        background-color: ${theme.header.background};
        position: fixed;
        top: 0;
        width: 100%;
      `}
    >
      <h1
        css={css`
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
          css={css`
            color: ${theme.color.accent};
          `}
        >
          JS
        </span>
      </h1>

      <Navigation />
    </header>
  )
}

export default Header
