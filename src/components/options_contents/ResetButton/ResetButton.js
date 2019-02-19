import React, { Component } from 'react';
import './ResetButton.css';
import { connect } from 'react-redux';

class ResetButtonConnect extends Component {
  render() {
    return (
      <button className="ResetButton">
        Reset
      </button>
    )
  }
}

const ResetButton = connect (null) (ResetButtonConnect);

export default ResetButton;
