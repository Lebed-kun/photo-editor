import React, { Component } from 'react';
import './App.css';

import MenuBar from './components/MenuBar/MenuBar';
import MainSection from './components/MainSection/MainSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <MainSection />
      </div>
    );
  }
}

export default App;
