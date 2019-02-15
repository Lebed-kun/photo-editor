import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OptionsBar.css';

class OptionsBarConnect extends Component {

  render() {
    const activeTab = this.props.activeTab[this.props.activeTab.length - 1];
    const hideTab = !activeTab || !activeTab.name;

    return (
      <div className="OptionsBar"
      style={{display : hideTab ? 'none' : 'flex'}}>
        <button>
          <i className="fas fa-angle-double-up"></i>
        </button>

        {null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { activeTab : state.activeTab }
}

const OptionsBar = connect(mapStateToProps) (OptionsBarConnect);

export default OptionsBar;
