import { RETRIEVE_TESTING } from "../actions/testAction";

const counter = (state = 5, action) => {
  switch (action.type) {
    case RETRIEVE_TESTING:
      return state + 10;
      break;
    default:
      return state;
  }
};

export default counter;
