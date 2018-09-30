import React, { Component } from 'react';
import { connect } from 'react-redux';

import SliderSection from '../components/SliderSection/SliderSection';
import SliderFilter from './SliderFilter';
import SliderList from './SliderList';

import Home from '../components/Home/Home';

class HomeContainer extends Component {
  render() {
    return (
      <Home
        sliderSection={
          <SliderSection
            heading={('What’s on')}
            sliderFilter={
              <SliderFilter />
            }
            sliderDataList={
              <SliderList />
            }
          />
        }
      />
    );
  }
}

export default connect()(HomeContainer);
