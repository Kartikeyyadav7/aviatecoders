import { combineReducers } from "redux";
import soundReducer from "./soundReducer";

const rootReducer = combineReducers({
	sound: soundReducer,
});

export default rootReducer;
