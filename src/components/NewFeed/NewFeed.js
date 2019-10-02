import React, { Component } from "react";
import PostList from "../PostList/PostList";

class NewFeed extends Component {
  render() {
    return <PostList subreddit="new" />;
  }
}

export default NewFeed;
