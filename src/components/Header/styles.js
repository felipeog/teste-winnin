import styled from '@emotion/styled'

export const Container = styled('header')`
  background-color: ${(props) => props.theme.header.background};
  position: fixed;
  top: 0;
  width: 100%;
`

export const Title = styled('h1')`
  font-size: 1.6rem;
  color: ${(props) => props.theme.header.text};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 1.6rem;
`

export const TitleAccent = styled('span')`
  color: ${(props) => props.theme.color.accent};
`
