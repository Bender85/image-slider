import { FETCH_SLIDER_DATA } from '../constants/sliderConstants';

const initialState = [];

export const sliderList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SLIDER_DATA:
      return [
        ...state,
        ...action.sliderDataList
      ];
    default:
      return state;
  }
};
