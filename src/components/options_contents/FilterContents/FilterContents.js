import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FilterContents.css';
import { filters } from '../../../constants/filters';
import { applyFilter } from '../../../middleware/apply_filter';

import { setFilter } from '../../../actions';

class FilterContentsConnect extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let name = event.target.getAttribute('name');
    let filter = filters.find(el => el.name === name);
    this.props.setFilter(filter);
  }

  componentDidMount() {
    let filter = this.props.filter[this.props.filter.length - 1];
    const imageUrl = this.props.imageUrl[this.props.imageUrl.length - 1];
    applyFilter('Canvas', imageUrl, filter);
  }

  componentDidUpdate(prevProps) {
    let filter = this.props.filter[this.props.filter.length - 1];
    let condition = filter.brightness !== prevProps.filter.brightness
      || filter.contrast !== prevProps.filter.contrast
      || filter.saturation !== prevProps.filter.saturation

    if (condition) {
      const imageUrl = this.props.imageUrl[this.props.imageUrl.length - 1];
      applyFilter('Canvas', imageUrl, filter);
    }
  }

  render() {
    const name = this.props.filter[this.props.filter.length - 1].name;

    return (
      <ul className="FilterContents">
        {filters.map(el => (
          <li key={el.id} name={el.name}
          onClick={this.handleClick}>
            <p
            style={{color : el.name === name ? '#35daff' : 'white'}}
            name={el.name}>
              {el.name}
            </p>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter : state.filter,
    imageUrl : state.imageUrl
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter : filter => dispatch(setFilter(filter))
  }
}

const FilterContents = connect (mapStateToProps, mapDispatchToProps) (FilterContentsConnect);

export default FilterContents;
