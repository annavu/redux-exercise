import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Form/>
      <Posts/>  
      </div>
    );
  }
}

export default App;
