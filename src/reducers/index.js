import { combineReducers } from "redux";
import { sliderList } from "./sliderList";
import { filterList } from "./filterSliderList";

const rootReducer = combineReducers({
  sliderDataList: sliderList,
  filterData: filterList
});

export default rootReducer;
