import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSliderData } from '../actions/slider';

import SliderList from '../components/SliderList/SliderList';

class SliderListContainer extends Component {
  static propTypes = {
    sliderDataList: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      }),
      date: PropTypes.shape({
        from: PropTypes.string,
        to:   PropTypes.string
      })
    })),
    getSliderData: PropTypes.func.isRequired
  };

  render() {
    const { sliderDataList } = this.props;

    return (
      <SliderList
        sliderDataList={sliderDataList}
      />
    );
  }

  componentDidMount() {
    const { getSliderData } = this.props;

    getSliderData();
  }
}

const mapStateToProps = state => ({
  sliderDataList: state.sliderDataList
});

const mapDispatchToProps = dispatch => ({
  getSliderData: () => {
    dispatch(getSliderData())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderListContainer);
