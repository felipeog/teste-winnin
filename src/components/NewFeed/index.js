import React, { Component } from 'react'
import { PostList } from 'components'

class NewFeed extends Component {
  render() {
    return <PostList subreddit="new" />
  }
}

export default NewFeed
