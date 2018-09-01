import React, { Component } from 'react'

export default class Posts extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({
      posts: data}))
  }



  render() {

    const postItem = this.state.posts.map(post => (
      <div className="post" key={post.id}>
        <p className="post__title">Title: {post.title}</p>
        <p className="post__body"><span className="click">Read more:</span> {post.body}...</p> 
      </div>
    ))

    return (
      <div>
        <h3 className="header">Posts:</h3>
        {postItem}
      </div>
    )
  }
}
