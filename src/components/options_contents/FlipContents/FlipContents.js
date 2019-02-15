import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FlipContents.css';

class FlipContentsConnect extends Component {
  render() {
    return (
      <div className="FlipContents">
      </div>
    )
  }
}

const FlipContents = connect (null) (FlipContentsConnect);

export default FlipContents;
