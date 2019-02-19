import React, { Component } from 'react';
import './ApplyButton.css';
import { connect } from 'react-redux';

class ApplyButtonConnect extends Component {
  render() {
    return (
      <button className="ApplyButton">
        Apply
      </button>
    )
  }
}

const ApplyButton = connect (null) (ApplyButtonConnect);

export default ApplyButton;
