import React, { Component } from 'react';
import './Canvas.css';
import { connect } from 'react-redux';

class CanvasConnect extends Component {
  componentDidMount() {
    if (this.props.imageUrl) {
      const canvas = document.querySelector('.Canvas');
      const context = canvas.getContext('2d');

      const image = new Image();
      image.src = this.props.imageUrl;

      image.onload = () => {
        context.drawImage(image, 0, 0, image.width, image.height,
                          0, 0, canvas.width, canvas.height);
      }
    }
  }

  render() {
    return (
      <canvas className="Canvas" width="360px" height="360px">
      </canvas>
    )
  }
}

function mapStateToProps(state) {
  return { imageUrl : state.imageUrl}
}

const Canvas = connect(mapStateToProps) (CanvasConnect);

export default Canvas;
