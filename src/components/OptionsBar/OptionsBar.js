import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OptionsBar.css';

import { optionsContents } from '../../constants/options_contents';
import { setActiveTab } from '../../actions';

class OptionsBarConnect extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnHideButton = this.handleClickOnHideButton.bind(this);
  }


  handleClickOnHideButton() {
    this.props.resetTab();
  }

  render() {
    const activeTab = this.props.activeTab[this.props.activeTab.length - 1];
    const hideTab = !activeTab || !activeTab.name;

    return (
      <div className="OptionsBar"
      style={{display : hideTab ? 'none' : 'flex'}}>
        <button onClick={this.handleClickOnHideButton}>
          <i className="fas fa-angle-double-up"></i>
        </button>

        {!hideTab ? optionsContents[activeTab.name] : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { activeTab : state.activeTab }
}

function mapDispatchToProps(dispatch) {
  return { resetTab : () => dispatch(setActiveTab(''))}
}

const OptionsBar = connect(mapStateToProps, mapDispatchToProps) (OptionsBarConnect);

export default OptionsBar;
