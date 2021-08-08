import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const intialState = {};
const middleware = [thunk];

const store = createStore(
	rootReducer,
	intialState,
	compose(applyMiddleware(...middleware))
);

export default store;
