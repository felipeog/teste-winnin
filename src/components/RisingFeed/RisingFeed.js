import React, { Component } from "react";
import PostList from "../PostList/PostList";

class RisingFeed extends Component {
  render() {
    return <PostList subreddit="rising" />;
  }
}

export default RisingFeed;
