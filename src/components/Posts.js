import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     posts: []
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data => this.setState({
  //     posts: data}))
  // }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {

    const postItem = this.props.posts.map(post => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});


export default connect(mapStateToProps, { fetchPosts })(Posts)