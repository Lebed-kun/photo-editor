import React, { Component } from 'react';
import './Canvas.css';

import { connect } from 'react-redux';

import { unlockMenu, setActiveTab } from '../../actions';

class CanvasConnect extends Component {
  componentDidMount() {
    if (this.props.imageUrl) {
      const canvas = document.querySelector('.Canvas');
      const context = canvas.getContext('2d');

      const image = new Image();
      image.src = this.props.imageUrl;

      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
      }

      this.props.unlockMenu();
      this.props.setActiveTab({ name : 'filter'});
    }
  }

  render() {
    return (
        <canvas className="Canvas" id="Canvas">
        </canvas>
    )
  }
}

function mapStateToProps(state) {
  return { imageUrl : state.imageUrl}
}

function mapDispatchToProps(dispatch) {
  return { unlockMenu : () => dispatch(unlockMenu()),
           setActiveTab : tab => dispatch(setActiveTab(tab))}
}

const Canvas = connect(mapStateToProps, mapDispatchToProps) (CanvasConnect);

export default Canvas;
