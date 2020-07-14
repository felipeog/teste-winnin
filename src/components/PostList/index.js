import React, { useState, useEffect, useCallback } from 'react'
import './index.scss'
import { PostItem } from 'components'

const PostList = ({ subreddit }) => {
  const [after, setAfter] = useState(null)
  const [end, setEnd] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [signal, setSignal] = useState(null)

  const limit = 10

  const getQuery = useCallback(
    (after) => {
      const api = 'https://www.reddit.com/r/reactjs'

      return `
      ${api}/${subreddit}/.json?limit=${limit}${after ? '&after=' + after : ''}
      `
    },
    [subreddit]
  )

  const loadPosts = useCallback(
    async (after, signal) => {
      setLoading(true)

      try {
        const query = getQuery(after)
        const response = await fetch(query, { signal })
        const data = await response.json()
        const { children } = data.data
        const loadedPosts = children.map((child) => child.data)

        setPosts((posts) => [...posts, ...loadedPosts])

        if (!loadedPosts.length || loadedPosts.length < limit) {
          setAfter(null)
          setEnd(true)
        } else {
          setAfter(loadedPosts[loadedPosts.length - 1].name)
        }

        setLoading(false)
      } catch (e) {
        if (e.name !== 'AbortError') {
          console.error('PostList@loadPosts >>>>>>', e)
          setError(true)
          setLoading(false)
        }
      }
    },
    [getQuery]
  )

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    setSignal(signal)

    loadPosts(null, signal)

    return () => controller.abort()
  }, [loadPosts])

  if (loading && !posts.length)
    return (
      <section className="message-wrapper">
        <p className="message">Carregando posts...</p>
      </section>
    )

  if (error)
    return (
      <section className="message-wrapper">
        <p className="message">Erro ao carregar posts</p>
      </section>
    )

  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

      {end && <p className="post-list__end">Fim do conteúdo</p>}

      <button
        type="button"
        disabled={end || loading}
        className="button load-more"
        onClick={() => loadPosts(after, signal)}
      >
        + Ver mais
      </button>
    </section>
  )
}

export default PostList
