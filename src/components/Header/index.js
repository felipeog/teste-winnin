/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Navigation } from 'components'
import { Container, Title, TitleAccent } from './styles'

const Header = () => {
  return (
    <Container>
      <Title>
        React<TitleAccent>JS</TitleAccent>
      </Title>

      <Navigation />
    </Container>
  )
}

export default Header
