import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VerticalExample from './examples/VerticalExample';
import HorizontalExample from './examples/HorizontalExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-flex-split-pane</h2>
        </div>
        <div className="App-intro">
          <div className="App-section">
            <h2>Vertical</h2>
            <VerticalExample />
          </div>
          <div className="App-section">
            <h2>Horizontal</h2>
            <HorizontalExample />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
