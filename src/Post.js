import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Post extends Component {
  render() {
    const { post, loading } = this.props;
    console.log(post);
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <ListGroup>
        {post.map(posts => (
          <ListGroup.Item key={posts.id}>{posts.title}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default Post;
