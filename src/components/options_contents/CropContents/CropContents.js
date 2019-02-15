import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CropContents.css';

class CropContentsConnect extends Component {
  render() {
    return (
      <div className="CropContents">
      </div>
    )
  }
}

const CropContents = connect (null) (CropContentsConnect);

export default CropContents;
