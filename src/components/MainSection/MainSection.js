import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainSection.css';

import { initMainSection } from '../../actions';
import { uploadButton } from '../../constants/main_section_contents';

class MainSectionConnect extends Component {
  componentDidMount() {
    this.props.initMainSection(uploadButton);
  }

  render() {
    const contents = this.props.contents[this.props.contents.length - 1];
    console.log(contents);

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
  return { contents : state.contents }
}

const MainSection = connect(mapStateToProps, mapDispatchToProps) (MainSectionConnect)

export default MainSection;
