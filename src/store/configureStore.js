import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const client = axios.create({
  baseURL: "https://rest.bandsintown.com",
  responseType: "json"
});

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(axiosMiddleware(client)))
  );
}
