import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ResizeContents.css';

class ResizeContentsConnect extends Component {
  render() {
    return (
      <div className="ResizeContents">
      </div>
    )
  }
}

const ResizeContents = connect (null) (ResizeContentsConnect);

export default ResizeContents;
