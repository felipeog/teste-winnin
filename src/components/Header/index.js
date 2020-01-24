/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Navigation } from 'components'
import { Header, Title, TitleAccent } from './styles'

const HeaderNavigation = () => {
  return (
    <Header>
      <Title>
        React<TitleAccent>JS</TitleAccent>
      </Title>

      <Navigation />
    </Header>
  )
}

export default HeaderNavigation
