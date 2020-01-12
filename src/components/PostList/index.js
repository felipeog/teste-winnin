import React, { useState, useEffect } from 'react'
import './index.scss'
import { PostItem } from 'components'
import r from 'config/Snoowrap'

const PostList = ({ subreddit }) => {
  const [after, setAfter] = useState(null)
  const [end, setEnd] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const options = { limit: 10 }

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    const board = await r.getSubreddit('reactjs')

    switch (subreddit) {
      case 'hot':
        try {
          let loadedPosts = await board.getHot({
            ...options,
            after,
          })

          let stickied = 0
          loadedPosts.forEach((newPost) => newPost.stickied && stickied++)

          if (stickied)
            loadedPosts = loadedPosts.slice(0, loadedPosts.length - stickied)

          setPosts([...posts, ...loadedPosts])

          if (!loadedPosts.length || loadedPosts.length < options.limit) {
            setAfter(null)
            setEnd(true)
          } else {
            setAfter(loadedPosts[loadedPosts.length - 1].name)
          }
        } catch (e) {
          console.error('PostList@loadPosts hot >>>>>>', e)
          setError(true)
        } finally {
          setLoading(false)
        }
        break

      case 'new':
        try {
          const loadedPosts = await board.getNew({
            ...options,
            after,
          })

          setPosts([...posts, ...loadedPosts])

          if (!loadedPosts.length || loadedPosts.length < options.limit) {
            setAfter(null)
            setEnd(true)
          } else {
            setAfter(loadedPosts[loadedPosts.length - 1].name)
          }
        } catch (e) {
          console.error('PostList@loadPosts new >>>>>>', e)
          setError(true)
        } finally {
          setLoading(false)
        }
        break

      case 'rising':
        try {
          const loadedPosts = await board.getRising({
            ...options,
            after,
          })

          setPosts([...posts, ...loadedPosts])

          if (!loadedPosts.length || loadedPosts.length < options.limit) {
            setAfter(null)
            setEnd(true)
          } else {
            setAfter(loadedPosts[loadedPosts.length - 1].name)
          }
        } catch (e) {
          console.error('PostList@loadPosts rising >>>>>>', e)
          setError(true)
        } finally {
          setLoading(false)
        }
        break

      default:
        break
    }
  }

  return (
    <React.Fragment>
      {error ? (
        <section className="error">
          <p className="error__message">Erro ao carregar posts</p>
        </section>
      ) : (
        <section className="post-list">
          {posts.length ? (
            posts.map((post) => <PostItem key={post.id} post={post} />)
          ) : (
            <p className="post-list__loading">Carregando posts...</p>
          )}

          {end ? <p className="post-list__end">Fim do conteúdo</p> : ''}

          <button
            type="button"
            disabled={end || loading ? 'disabled' : ''}
            className={`button load-more ${
              end || loading ? 'button--disabled' : ''
            }`}
            onClick={loadPosts}
          >
            + Ver mais
          </button>
        </section>
      )}
    </React.Fragment>
  )
}

export default PostList
