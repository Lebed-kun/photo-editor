import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CropContents.css';

import { setCropSize } from '../../../actions';
import { aspectRatios } from '../../../constants/aspect_ratios';

import WidthHeightInput from '../WidthHeightInput/WidthHeightInput';
import ApplyButton from '../ApplyButton/ApplyButton';
import ResetButton from '../ResetButton/ResetButton';

class CropContentsConnect extends Component {
  constructor(props) {
    super(props);
    this.handleChangeWidth = this.handleChangeWidth.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
  }

  handleChangeWidth(event) {
    this.props.setCrop(event.target.value, this.props.size.height);
  }

  handleChangeHeight(event) {
    this.props.setCrop(this.props.size.width, event.target.value);
  }

  render() {
    return (
      <div className="CropContents">
        <WidthHeightInput onChangeWidth={this.handleChangeWidth}
        onChangeHeight={this.handleChangeHeight} />
        <ul>
          {aspectRatios.map(el => (
            <li key={el.id}>
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
        <ApplyButton />
        <ResetButton />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    size : state.cropSize
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCrop : (width, height) => dispatch(setCropSize({
      width,
      height
    }))
  }
}

const CropContents = connect (mapStateToProps, mapDispatchToProps) (CropContentsConnect);

export default CropContents;
