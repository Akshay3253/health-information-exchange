import { RETRIEVE_LOGIN_DETAILS } from "../actions/testAction";

const loginDetails = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_LOGIN_DETAILS:
      return (state = { ...state, ...action.payload.data });
    default:
      return state;
  }
};

export default loginDetails;
