import axios from "axios";
import { FETCH_HOUSE_REQUEST, 
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAIL,
} from "../ActionType";

export const houseforSaleFetch = () => async (dispatch) => {
  const url = "/api/sale";
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const houseforRentFetch = () => async (dispatch) => {
  const url = "/api/rent";
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};