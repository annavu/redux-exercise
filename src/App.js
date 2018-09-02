import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';


import Posts from './components/Posts';
import Form from './components/Form';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form/>
          <Posts/>  
        </div>
      </Provider>
    );
  }
}

export default App;
