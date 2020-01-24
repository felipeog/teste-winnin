import styled from '@emotion/styled'

export const Container = styled('a')`
  color: ${(props) => props.theme.postItem.wrapper.background};
  text-decoration: none;
  display: block;
  border-bottom: ${(props) => props.theme.postItem.wrapper.border};

  &:first-child {
    border-top: ${(props) => props.theme.postItem.wrapper.border};
  }
`
export const Post = styled('article')`
  display: flex;
  padding: 0.8rem;

  &:hover {
    background-color: ${(props) => props.theme.postItem.hover};
  }
`

export const Thumbnail = styled('img')`
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  margin-right: 0.8rem;
  object-fit: cover;
`

export const Title = styled('h1')`
  font-weight: bold;
  color: ${(props) => props.theme.postItem.title};
`

export const Meta = styled('p')`
  font-size: 0.8rem;
  margin: 0.4rem 0;
`

export const Time = styled('span')`
  color: ${(props) => props.theme.postItem.time};
`

export const User = styled('span')`
  color: ${(props) => props.theme.postItem.user};
`

export const Permalink = styled('p')`
  font-size: 0.8rem;
  word-break: break-all;
  color: ${(props) => props.theme.postItem.permalink};
  text-decoration: underline;
  text-underline-position: under;
  line-height: 1.4em;
`
