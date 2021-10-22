import { CARD_DATA } from "redux/actionTypes";

const initialState = {
  data: [],
};

const cardDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default cardDataReducer;