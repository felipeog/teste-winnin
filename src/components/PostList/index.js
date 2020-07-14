import React, { useState, useEffect, useCallback } from 'react'
import './index.scss'
import { PostItem, Message } from 'components'

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
        const loadedPosts = children.map((child) => child.data).slice(0, 10) // slice the first ten items in case there are pinned posts

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

  if (loading && !posts.length) return <Message message="Carregando posts..." />
  if (error) return <Message message="Erro ao carregar posts :(" />

  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

      {end && <Message message="Fim do conteúdo" />}

      {!end && (
        <button
          type="button"
          disabled={end || loading}
          className="post-list__load-more"
          onClick={() => loadPosts(after, signal)}
        >
          + Ver mais
        </button>
      )}
    </section>
  )
}

export default PostList
