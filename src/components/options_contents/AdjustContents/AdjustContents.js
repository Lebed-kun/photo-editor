import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdjustContents.css';

import { setFilter } from '../../../actions';
import { applyFilter } from '../../../middleware/apply_filter';

class AdjustContentsConnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness : 0,
      contrast : 0,
      saturation : 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
    this.props.setFilter({
      brightness : this.state.brightness,
      contrast : this.state.contrast,
      saturation : this.state.saturation
    });
  }

  componentDidUpdate(prevProps) {
    let filter = this.props.filter[this.props.filter.length - 1];
    let condition = filter.brightness !== prevProps.filter.brightness
      || filter.contrast !== prevProps.filter.contrast
      || filter.saturation !== prevProps.filter.saturation;

    if (condition) {
      const imageUrl = this.props.imageUrl[this.props.imageUrl.length - 1];
      applyFilter('Canvas', imageUrl, filter);
    }
  }

  render() {
    const filter = this.props.filter[this.props.filter.length - 1];

    return (
      <div className="AdjustContents">
        <div className="slider-tile">
          <p>Brightness</p>
          <input type="range" min="-1" max="1" value={filter.brightness} step="0.01"
          name="brightness"
          onChange={this.handleChange}/>
        </div>
        <div className="slider-tile">
          <p>Contrast</p>
          <input type="range" min="-1" max="1" value={filter.contrast} step="0.01"
          name="contrast"
          onChange={this.handleChange}/>
        </div>
        <div className="slider-tile">
          <p>Saturation</p>
          <input type="range" min="-1" max="1" value={filter.saturation} step="0.01"
          name="saturation"
          onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter : state.filter,
    imageUrl : state.imageUrl
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter : filter => dispatch(setFilter(filter))
  }
}

const AdjustContents = connect (mapStateToProps, mapDispatchToProps) (AdjustContentsConnect);

export default AdjustContents;
