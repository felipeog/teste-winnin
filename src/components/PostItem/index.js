import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import './index.scss'
import Pin from '../../assets/img/pin.svg'

const PostItem = ({ post }) => {
  const { title, author, stickied, url } = post
  const thumb = post.thumbnail.match('http') ? post.thumbnail : null
  const time = moment.unix(post.created_utc).fromNow()

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="post-item-wrapper"
    >
      <article className="post-item">
        {thumb && <img className="post-item__thumb" src={thumb} alt={title} />}

        <div className="post-item__content">
          <h1 className="post-item__title">{title}</h1>
          <p className="post-item__meta">
            <span className="post-item__time">Enviado {time}</span> por{' '}
            <span className="post-item__author">{author}</span>
          </p>
          <p className="post-item__url">{url}</p>
        </div>

        {stickied && <img className="post-item__pin" src={Pin} alt="" />}
      </article>
    </a>
  )
}

export default PostItem
