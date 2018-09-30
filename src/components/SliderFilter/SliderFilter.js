import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class SliderFilter extends Component {
  static propTypes = {
    getFilteredData: PropTypes.func.isRequired
  };

  render() {
    return (
      <form className="suggestion-filter" onSubmit={e => { this.onSubmit(e) }} noValidate>
        <div className="suggestion-filter-group">
          <label className="suggestion-filter-label" htmlFor="sliderFilterDateFrom">
            From:
          </label>
          <input className="suggestion-filter-control" id="sliderFilterDateFrom" name="dateFrom" type="date" placeholder="" />
        </div>
        <div className="suggestion-filter-group">
          <label className="suggestion-filter-label" htmlFor="sliderFilterDateTo">
            To:
          </label>
          <input className="suggestion-filter-control" id="sliderFilterDateTo" name="dateTo" type="date" placeholder="" />
        </div>
        <button className="suggestion-filter-submit" type="submit">
          Search
        </button>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    const { getFilteredData } = this.props;
    const dateFrom = e.target.dateFrom.value;
    const dateTo = e.target.dateTo.value;
    if(!dateFrom || !dateTo) {
      alert('please choice a date');
    } else {
      getFilteredData({dateFrom, dateTo});
    }
  }
};
