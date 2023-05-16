import { RETRIEVE_LOGIN_DETAILS } from "../actions/testAction";

const loginDetails = (state = 5, action) => {
  switch (action.type) {
    case RETRIEVE_LOGIN_DETAILS:
      let userObj = {
        userName: "Akshay",
      };
      return userObj;
      break;
    default:
      return state;
  }
};

export default loginDetails;
