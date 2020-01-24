/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Container,
  Post,
  Thumbnail,
  Title,
  Meta,
  Time,
  User,
  Permalink,
} from './styles'
import moment from 'moment'
import 'moment/locale/pt-br'

const formatData = (post) => {
  console.log(post)
  const thumb = post.thumbnail.match('http') ? post.thumbnail : false
  const title = post.title
  const user = post.author
  const permalink = 'https://www.reddit.com' + post.permalink
  const time = moment.unix(post.created_utc).fromNow()

  return { thumb, title, user, permalink, time }
}

const PostItem = ({ post }) => {
  const { thumb, title, user, permalink, time } = formatData(post)

  return (
    <Container
      href={permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="post-item-wrapper"
    >
      <Post>
        {thumb ? <Thumbnail src={thumb} alt={title} /> : ''}

        <div>
          <Title>{title}</Title>
          <Meta>
            <Time>Enviado {time}</Time> por <User>{user}</User>
          </Meta>
          <Permalink>{permalink}</Permalink>
        </div>
      </Post>
    </Container>
  )
}

export default PostItem
