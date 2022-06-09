import {
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAIL,
} from "../ActionType";

export const HouesForSaleReducer = (state = { houseforSale: [] }, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REQUEST:
      return { loading: true };
    case FETCH_HOUSE_SUCCESS:
      return { loading: false, houseforSale: action.payload };
    case FETCH_HOUSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const HouseForRentReducer = (state = { houseforRent: [] }, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REQUEST:
      return { loading: true };
    case FETCH_HOUSE_SUCCESS:
      return { loading: false, houseforRent: action.payload };
    case FETCH_HOUSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}; 