import React, { Component } from 'react';
import './App.css';

import MenuBar from './components/MenuBar/MenuBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
      </div>
    );
  }
}

export default App;
