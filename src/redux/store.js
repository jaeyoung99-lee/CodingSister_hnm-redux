import { applyMiddleware, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";

let store = createStore(productReducer, applyMiddleware(thunk));

export default store;
