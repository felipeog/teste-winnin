import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/pt-br'
import './index.scss'
import Pin from '../../assets/img/pin.svg'
import ArrowUp from '../../assets/img/arrowUp.svg'

const PostItem = ({ post }) => {
  const { title, author, stickied } = post
  const upvoteRatio = post.upvote_ratio * 100
  const url = `https://www.reddit.com/${post.permalink}`
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

        <div className="content">
          <h1 className="content__title">{title}</h1>
          <p className="content__meta">
            <span className="content__time">Enviado {time}</span> por{' '}
            <span className="content__author">{author}</span>
          </p>
          <p className="content__url">{url}</p>
        </div>

        <div className="upvote-ratio">
          <img className="upvote-ratio__icon" src={ArrowUp} alt="" />
          <p className="upvote-ratio__count">{upvoteRatio}%</p>
        </div>

        {stickied && <img className="post-item__pin" src={Pin} alt="" />}
      </article>
    </a>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostItem
