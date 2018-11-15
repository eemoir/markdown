import React, { Component } from 'react';
import './App.css';
import { Input } from './index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">Markdown Previewer</h1>
        <Input />
      </div>
    );
  }
}

export default App;
