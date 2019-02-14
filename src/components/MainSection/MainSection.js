import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainSection.css';

import { initMainSection } from '../../actions';
import UploadButton from '../UploadButton/UploadButton';
import Canvas from '../Canvas/Canvas';

class MainSectionConnect extends Component {
  componentDidMount() {
    this.props.initMainSection(<UploadButton />);
  }

  componentDidUpdate(prevProps) {
    if (this.props.imageUrl !== prevProps.imageUrl) {
      this.props.initMainSection(<Canvas />);
    }
  }

  render() {
    const contents = this.props.contents[this.props.contents.length - 1];

    return (
      <div className="MainSection">
        {contents}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initMainSection : contents => dispatch(initMainSection(contents))
  }
}

function mapStateToProps(state) {
  return { contents : state.contents,
          imageUrl : state.imageUrl}
}

const MainSection = connect(mapStateToProps, mapDispatchToProps) (MainSectionConnect)

export default MainSection;
