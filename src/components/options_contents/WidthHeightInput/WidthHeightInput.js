import React, { Component } from 'react';
import './WidthHeightInput.css';

class WidthHeightInput extends Component {
  render() {
    return (
      <div className="WidthHeightInput">
        <div className="size-tile">
          <p>W</p>
          <input type="text" maxLength="5" onChange={this.props.onChangeWidth}/>
        </div>
        <p>x</p>
        <div className="size-tile">
          <p>H</p>
          <input type="text" maxLength="5" onChange={this.props.onChangeHeight}/>
        </div>
      </div>
    )
  }
}

export default WidthHeightInput;
