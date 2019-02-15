import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuBar.css';

import { initMenu, setActiveTab } from '../../actions';
import { menuItems } from '../../constants/menu_items';

class MenuBarConnect extends Component {
  componentDidMount() {
    this.props.initMenu(menuItems);
  }

  render() {
    const isLocked = this.props.isMenuLocked[this.props.isMenuLocked.length - 1];
    const activeTab = this.props.activeTab[this.props.activeTab.length - 1];

    return (
      <div className="MenuBar">
        <ul>
          {this.props.items.map(el => (
            <li key={el.id}
            style={{cursor : isLocked ? 'not-allowed' : 'pointer'}}>
              <i className={el.iconClass}
              style={{color : el.title === activeTab.name ? '#35daff' : 'white'}}></i>
              <p>{el.title}</p>
            </li>
          ))}
        </ul>

        <button className={isLocked ? 'locked-button' : 'unlocked-button'}>
          <i className="far fa-arrow-alt-circle-down"></i>
          <p>Download</p>
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initMenu : items => dispatch(initMenu(items)),
    setActiveTab : tab => dispatch(setActiveTab(tab))
  }
}

function mapStateToProps(state) {
  return { items : state.items,
          isMenuLocked : state.isMenuLocked,
          activeTab : state.activeTab }
}

const MenuBar = connect(mapStateToProps, mapDispatchToProps) (MenuBarConnect)

export default MenuBar;
