import React, { Component } from 'react'

export default class Form extends Component {

  constructor() {
    super();
    this.state = {
      title:'',
      body:''
    };
  }

  onChange(e) {
    console.log(e.target.name)
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault(e);

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit.bind(this)}>
        <label className="label">Title:</label>
        <input className="text" type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)}/>
        <label className="label">Text:</label>
        <textarea className="text" name="body"  cols="20" rows="5" value={this.state.body} onChange={this.onChange.bind(this)}></textarea>
        <button className="btn">Add</button>
        <hr/>
      </form>
    )
  }
}
