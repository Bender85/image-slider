import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Home extends Component {
  static propTypes = {
    sliderSection: PropTypes.element
  };

  render() {
    const { sliderSection } = this.props;

    return (
      <div className="home">
        <div className="container">
          {sliderSection}
        </div>
      </div>
    );
  }
};
