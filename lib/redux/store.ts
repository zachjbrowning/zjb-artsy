import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];


const constructMiddleware = (middleware: any) => {
  //if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  //} else return applyMiddleware(...middleware);
}

const store = createStore(
  rootReducer,
  initialState,
  constructMiddleware(middleware)
);
export default store;