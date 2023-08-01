import { legacy_createStore as createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
const store = createStore(
  cakeReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
