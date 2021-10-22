import { CARD_DATA } from "redux/actionTypes";

export const cardData = (data) => {
  return { type: CARD_DATA, data };
};