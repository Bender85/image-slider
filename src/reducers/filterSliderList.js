import {FILTERED_DATA} from "../constants/sliderConstants";

const initialState = [];

export function filterList(state = initialState, action) {
  switch (action.type) {
    case FILTERED_DATA:
      // return {
      //   type: "FILTERED_DATA",
      //   filterData: action.filterData
      // };
      return [
        ...state,
        ...action.filterData
      ];
    default:
      return state;
  }
}
