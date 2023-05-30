import { combineReducers } from "redux";
import loginDetails from "./loginReducer";

const rootReducer = combineReducers({
  loginDetails,
});

export default rootReducer;
