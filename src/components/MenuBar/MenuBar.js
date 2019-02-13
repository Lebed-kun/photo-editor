import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuBar.css';

import { initMenu } from '../../actions';
import { menuItems } from '../../constants/menu_items';

class MenuBarConnect extends Component {
  componentDidMount() {
    this.props.initMenu(menuItems);
  }

  render() {
    return (
      <div className="MenuBar">
        <ul>
          {this.props.items.map(el => (
            <li key={el.id}>
              <i className={el.iconClass}></i>
              <p>{el.title}</p>
            </li>
          ))}
        </ul>

        <button>
          <i className="far fa-arrow-alt-circle-down"></i>
          <p>Download</p>
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initMenu : items => dispatch(initMenu(items))
  }
}

function mapStateToProps(state) {
  return { items : state.items }
}

const MenuBar = connect(mapStateToProps, mapDispatchToProps) (MenuBarConnect)

export default MenuBar;
