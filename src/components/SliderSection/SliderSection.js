import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class SliderSection extends Component {
  static propTypes = {
    heading: PropTypes.string,
    sliderFilter: PropTypes.element,
    sliderDataList: PropTypes.element
  };

  render() {
    const {
      heading,
      sliderFilter,
      sliderDataList
    } = this.props;

    return (
      <section className="suggestion-section">
        <div className="suggestion-section-header">
          <div className="suggestion-section-heading">
            {heading}
          </div>
          {sliderFilter}
        </div>
        {
          sliderDataList && (
            <div className="suggestion-section-block ">
              {sliderDataList}
            </div>
          )
        }
      </section>
    );
  }
};
