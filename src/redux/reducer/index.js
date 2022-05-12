import { combineReducers } from "redux";
import actionReducer from "./actionReducer";

const reducers = combineReducers({
    userReducer: actionReducer
})
export default reducers;