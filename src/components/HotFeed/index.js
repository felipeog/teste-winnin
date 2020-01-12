import React, { Component } from 'react'
import { PostList } from 'components'

class HotFeed extends Component {
  render() {
    return <PostList subreddit="hot" />
  }
}

export default HotFeed
