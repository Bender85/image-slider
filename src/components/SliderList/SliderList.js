import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider/Slider';

import SliderData from '../SliderData/SliderData';

import './index.css';

export default class SliderList extends Component {
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
    }))
  };

  render() {
    const { sliderDataList } = this.props;

    const carouselItems = sliderDataList && sliderDataList.map((sliderData, index) => (
      <SliderData
        title={sliderData.title}
        image={{
          src: sliderData.image.src,
          alt: sliderData.image.alt
        }}
        date={{
          from: sliderData.date.from,
          to:   sliderData.date.to
        }}
      />
    ));

    return (
      <div className="suggestion-list">
        <Slider
          items={carouselItems}
          options={{
            itemsToShow:   3,
            itemsToScroll: 1,
            nav: true,

            responsive: {
              '767': {
                options: {
                  itemsToShow: 1
                }
              }
            }
          }}
        />
      </div>
    );
  }
};
