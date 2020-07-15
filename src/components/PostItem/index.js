import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Pin from '../../assets/img/pin.svg'
import ArrowUp from '../../assets/img/arrowUp.svg'
import Comment from '../../assets/img/comment.svg'
import { decodeEntities, elapsedTime } from 'utils'

const PostItem = ({ post }) => {
  const { author, stickied } = post
  const comments = post.num_comments.toLocaleString()
  const title = decodeEntities(post.title)
  const upvoteRatio = post.upvote_ratio * 100
  const url = `https://www.reddit.com${post.permalink}`
  const thumb = post.thumbnail.match('http') ? post.thumbnail : null
  const time = elapsedTime(post.created_utc)

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
            <span className="content__time">Enviado há {time}</span> por{' '}
            <span className="content__author">{author}</span>
          </p>
          <p className="content__url">{url}</p>
        </div>

        <div className="metrics">
          <div className="metrics__metric">
            <img className="metrics__icon" src={Comment} alt="" />
            <p className="metrics__count">{comments}</p>
          </div>
          <div className="metrics__metric">
            <img className="metrics__icon" src={ArrowUp} alt="" />
            <p className="metrics__count">{upvoteRatio}%</p>
          </div>
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
