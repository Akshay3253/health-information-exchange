import counter from "./counterReducer";
import { combineReducers } from "redux";
import loginDetails from "./loginReducer";

const rootReducer = combineReducers({
  counter,
  loginDetails,
});

export default rootReducer;
