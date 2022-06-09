import { applyMiddleware, combineReducers, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import {
  HouesForSaleReducer,
  HouseForRentReducer,
} from "./Reducer/HouseFetchReducer";

const initialState = {};

const reducer = combineReducers({
  houseforSale: HouesForSaleReducer,
  houseforRent: HouseForRentReducer,
  
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer:{}}
  
);
 
export default store;