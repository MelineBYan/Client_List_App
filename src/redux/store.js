import { createStore, combineReducers, applyMiddleware } from "redux";
import clientReducer from "./reducers/clientReducer";
import clientModalReducer from "./reducers/clientModalReducer";
import searchReducer from "./reducers/searchReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(
  combineReducers({
    clientReducer,
    clientModalReducer,
    searchReducer,
  }),
  applyMiddleware(...middlewares)
);

window.store = store;
export default store;
