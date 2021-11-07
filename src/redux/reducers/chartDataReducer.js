import { AREA_CHART_DATA, AREA_FILTER, ADD_BUILDING } from "redux/actionTypes";

const initialState = {
  data: [],
  selection: ' ',
};

const chartDataReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case AREA_CHART_DATA:
      return {
        ...state,
        data: action.data,
      };
    case AREA_FILTER:
      return { ...state, selection: payload };
    default:
      return state;
  }
};

export default chartDataReducer;
