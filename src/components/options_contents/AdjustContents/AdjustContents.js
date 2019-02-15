import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdjustContents.css';

class AdjustContentsConnect extends Component {
  render() {
    return (
      <div className="AdjustContents">
      </div>
    )
  }
}

const AdjustContents = connect (null) (AdjustContentsConnect);

export default AdjustContents;
