import React, { Component } from 'react';
import './UploadButton.css';
import { connect } from 'react-redux';

import { openFile, uploadImage } from '../../actions';

class UploadButtonConnect extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    this.props.openFile({ uploadButton : document.querySelector('.UploadButton') });
  }

  handleChange(event) {
    this.props.uploadImage({ file : event.target.files[0] });
  }

  render() {
    return (
      <button className="UploadButton" onClick={this.handleClick}>
        <input type="file" style={{display : 'none'}} onChange={this.handleChange} />
        <i className="fas fa-upload"></i>
        <p>Upload</p>
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openFile : button => dispatch(openFile(button)),
    uploadImage : imageUrl => dispatch(uploadImage(imageUrl))
  }
}

const UploadButton = connect(null, mapDispatchToProps) (UploadButtonConnect);

export default UploadButton;
