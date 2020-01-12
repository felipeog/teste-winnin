import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import './index.scss'

const formatData = (post) => {
  const thumb = post.thumbnail.match('http') ? post.thumbnail : false
  const title = post.title
  const user = post.author.name
  const url = 'https://www.reddit.com' + post.permalink
  const time = moment.unix(post.created_utc).fromNow()

  return { thumb, title, user, url, time }
}

const PostItem = ({ post }) => {
  const { thumb, title, user, url, time } = formatData(post)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="post-item-wrapper"
    >
      <article className="post-item">
        {thumb ? (
          <img className="post-item__thumb" src={thumb} alt={title} />
        ) : (
          ''
        )}

        <div className="post-item__content">
          <h1 className="post-item__title">{title}</h1>
          <p className="post-item__meta">
            <span className="post-item__time">Enviado {time}</span> por{' '}
            <span className="post-item__user">{user}</span>
          </p>
          <p className="post-item__url">{url}</p>
        </div>
      </article>
    </a>
  )
}

export default PostItem
