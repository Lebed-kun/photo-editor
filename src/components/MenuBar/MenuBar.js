import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuBar.css';

import { initMenu, setActiveTab } from '../../actions';
import { menuItems } from '../../constants/menu_items';

class MenuBarConnect extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const name = event.target.getAttribute('name');
    const isLocked = this.props.isMenuLocked[this.props.isMenuLocked.length - 1];
    const activeTab = this.props.activeTab[this.props.activeTab.length - 1];
    
    if (!isLocked && activeTab.name !== name) {
      this.props.setActiveTab({ name : name });
    } else if (!isLocked) {
      this.props.setActiveTab({ name : '' });
    }

  }

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
            style={{cursor : isLocked ? 'not-allowed' : 'pointer'}}
            name={el.title}
            onClick={this.handleClick}>
              <i className={el.iconClass}
              style={{color : el.title === activeTab.name ? '#35daff' : 'white'}}
              name={el.title}></i>
              <p name={el.title}>{el.title}</p>
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
