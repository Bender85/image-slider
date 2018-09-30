import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSliderData, getFilteredData } from '../actions/slider';

import SliderFilter from '../components/SliderFilter/SliderFilter';

class SliderFilterContainer extends Component {
  static propTypes = {
    getSliderData: PropTypes.func.isRequired,
    getFilteredData: PropTypes.func.isRequired
  };

  render() {
    const { getSliderData, getFilteredData } = this.props;

    return (
      <SliderFilter
        getSliderData={getSliderData}
        getFilteredData={getFilteredData}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSliderData: (options) => {
    dispatch(getSliderData(options));
  },
  getFilteredData: (filterData) => {
    dispatch(getFilteredData(filterData))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SliderFilterContainer);
