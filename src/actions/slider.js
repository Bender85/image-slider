import axios from 'axios';
import {FILTERED_DATA, FETCH_SLIDER_DATA } from '../constants/sliderConstants';

const urlApi = 'http://demo0144709.mockable.io/api/slider-data-list';

/* Thunks */
export const getSliderData = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(urlApi);
      console.log(res.data);
      console.log(1);
      dispatch(getImagesSuccess(res.data)) // res.data will be an [] of images
    }
    catch(e) {
      console.error('Fetching slider data failed: ' + e)
    }
  }
};

export const getFilteredData = (options) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${urlApi}?dateFrom=${options.dateFrom}&dateTo=${options.dateTo}`);
      console.log(res.data);
      console.log(2);
      dispatch(setFilterData(res.data)) // filtered data
    }
    catch(e) {
      console.error('Fetching slider data failed: ' + e)
    }
  }
};


/* Action Creators */
export function getImagesSuccess(sliderDataList) {
  return {
    type: FETCH_SLIDER_DATA,
    sliderDataList
  }
}

export function setFilterData(filterData) {
  return {
    type: FILTERED_DATA,
    filterData
  }
}


