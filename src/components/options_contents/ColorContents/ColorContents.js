import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ColorContents.css';

class ColorContentsConnect extends Component {
  render() {
    return (
      <div className="AdjustContents">
        <div className="slider-tile">
          <p>Red</p>
          <input type="range" min="0" max="255" value="0"/>
        </div>
        <div className="slider-tile">
          <p>Green</p>
          <input type="range" min="0" max="255" value="0"/>
        </div>
        <div className="slider-tile">
          <p>Blue</p>
          <input type="range" min="0" max="255" value="0"/>
        </div>
      </div>
    )
  }
}

const ColorContents = connect (null) (ColorContentsConnect);

export default ColorContents;
