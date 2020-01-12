import React, { Component } from 'react'
import { PostItem } from 'components'
import r from 'config/Snoowrap'

class PostList extends Component {
  state = {
    after: null,
    board: this.props.subreddit,
    end: false,
    error: false,
    loading: true,
    posts: [],
  }

  options = { limit: 10 }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    try {
      this.setState({ loading: true })

      const board = await r.getSubreddit('reactjs')
      let posts,
        after,
        end = false

      switch (this.props.subreddit) {
        case 'hot':
          let stickied = 0

          posts = await board.getHot({
            ...this.options,
            after: this.state.after,
          })

          posts.forEach((post) => {
            if (post.stickied) stickied++
          })

          if (stickied) posts = posts.slice(0, posts.length - stickied)
          break

        case 'new':
          posts = await board.getNew({
            ...this.options,
            after: this.state.after,
          })
          break

        case 'rising':
          posts = await board.getRising({
            ...this.options,
            after: this.state.after,
          })
          break

        default:
          break
      }

      if (!posts.length || posts.length < this.options.limit) {
        after = null
        end = true
      } else {
        after = posts[posts.length - 1].name
      }

      this.setState({
        posts: [...this.state.posts, ...posts],
        after,
        end,
        loading: false,
      })
    } catch (err) {
      console.error(err)

      this.setState({ error: true })
    }
  }

  render() {
    const { posts, end, error, loading } = this.state

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
              onClick={this.loadPosts}
            >
              + Ver mais
            </button>
          </section>
        )}
      </React.Fragment>
    )
  }
}

export default PostList
