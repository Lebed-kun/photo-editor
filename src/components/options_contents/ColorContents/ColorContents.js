import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ColorContents.css';

import { setColor } from '../../../actions';
import { applyColor } from '../../../middleware/apply_color';

class ColorContentsConnect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.props.setColor({ color : event.target.value });
  }

  handleClick() {
    this.props.setColor({ color : 0 });
  }

  componentDidUpdate(prevProps) {
    let filter = this.props.color[this.props.color.length - 1];
    let condition = filter.color !== prevProps.color;

    if (condition) {
      const imageUrl = this.props.imageUrl[this.props.imageUrl.length - 1];
      applyColor('Canvas', imageUrl, filter);
    }
  }

  render() {
    const filter = this.props.color[this.props.color.length - 1];

    return (
      <div className="ColorContents">
        <div className="slider-tile">
          <p>Color correction</p>
          <input type="range" min="-1" max="1" value={filter.color}
          step="0.01"
          onChange={this.handleChange}/>
        </div>

        <button onClick={this.handleClick}>
          Reset
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    color : state.color,
    imageUrl : state.imageUrl
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setColor : color => dispatch(setColor(color))
  }
}

const ColorContents = connect (mapStateToProps, mapDispatchToProps) (ColorContentsConnect);

export default ColorContents;
