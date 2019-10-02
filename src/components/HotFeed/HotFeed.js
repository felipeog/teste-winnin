import React, { Component } from "react";
import PostList from "../PostList/PostList";

class HotFeed extends Component {
  render() {
    return <PostList subreddit="hot" />;
  }
}

export default HotFeed;
