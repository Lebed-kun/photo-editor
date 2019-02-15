import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RotateContents.css';

class RotateContentsConnect extends Component {
  render() {
    return (
      <div className="RotateContents">
      </div>
    )
  }
}

const RotateContents = connect (null) (RotateContentsConnect);

export default RotateContents;
