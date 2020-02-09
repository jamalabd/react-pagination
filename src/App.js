import React from "react";
import "./styles.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 10
    };
  }

  async componentDidMount() {
    this.setState(prevState => {
      return {
        post: prevState.post,
        laoding: (prevState.loading = true),
        currentPage: prevState.currentPage,
        postsPerPage: prevState.postsPerPage
      };
    });

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    this.setState(prevState => {
      return {
        post: (prevState.post = res.data),
        laoding: (prevState.loading = false),
        currentPage: prevState.currentPage,
        postsPerPage: prevState.postsPerPage
      };
    });

    console.log(this.state);
  }

  render() {
    console.log(this.state);
    // get post
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.post.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return (
      <div className="App">
        <h1>My Blog</h1>
        <Post post={currentPosts} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
