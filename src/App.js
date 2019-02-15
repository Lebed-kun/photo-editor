import React, { Component } from 'react';
import './App.css';

import MenuBar from './components/MenuBar/MenuBar';
import MainSection from './components/MainSection/MainSection';
import OptionsBar from './components/OptionsBar/OptionsBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <OptionsBar />
        <MainSection />
      </div>
    );
  }
}

export default App;
