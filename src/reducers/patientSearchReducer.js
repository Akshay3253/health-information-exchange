import { RETRIEVE_SEARCH_PATIENT } from "../actions/testAction";

const patientSearchDetails = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_SEARCH_PATIENT:
      return (state = { ...state, ...action.payload.data });
    default:
      return state;
  }
};

export default patientSearchDetails;
