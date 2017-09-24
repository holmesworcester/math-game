import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Math Game</h2>
        </div>
        <p className="App-intro">
          Add these numbers together: <Numbers/>
        </p>
      </div>
    );
  }
}

export default App;
