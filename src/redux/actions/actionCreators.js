import { CARD_DATA, AREA_CHART_DATA, AREA_FILTER, ADD_BUILDING } from "redux/actionTypes";

export const cardData = (data) => {
  return { type: CARD_DATA, data };
};
export const areaChartData = data => {
  return { type: AREA_CHART_DATA, data }
}
export const areaFilter = payload => {
  return { type: AREA_FILTER, payload }
}
export const addBuilding = data => {
  return { type: ADD_BUILDING, data }
}
