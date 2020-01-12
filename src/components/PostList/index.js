import React, { useState, useEffect } from 'react'
import './index.scss'
import { PostItem } from 'components'
import Axios from 'axios'

const PostList = ({ subreddit }) => {
  const [after, setAfter] = useState(null)
  const [end, setEnd] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const api = 'https://www.reddit.com/r/reactjs'
  const limit = 10

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)

    try {
      const query = `${api}/${subreddit}/.json?limit=${limit}${
        after ? '&after=' + after : ''
      }`
      const { data } = await Axios.get(query)
      const { children } = data.data
      const loadedPosts = children.map((child) => child.data).slice(0, 10)

      setPosts([...posts, ...loadedPosts])

      if (!loadedPosts.length || loadedPosts.length < limit) {
        setAfter(null)
        setEnd(true)
      } else {
        setAfter(loadedPosts[loadedPosts.length - 1].name)
      }
    } catch (e) {
      console.error('PostList@loadPosts >>>>>>', e)
      setError(true)
    } finally {
      setLoading(false)
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
