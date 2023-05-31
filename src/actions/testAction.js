import { createAction } from "redux-actions";

export const RETRIEVE_TESTING = "RETRIEVE_TESTING";
export const REQUEST_LOGIN_DETAILS = "REQUEST_LOGIN_DETAILS";

export const RETRIEVE_LOGIN_DETAILS = "RETRIEVE_LOGIN_DETAILS";

export const REQUEST_SEARCH_PATIENT = "REQUEST_SEARCH_PATIENT";

export const RETRIEVE_SEARCH_PATIENT = "RETRIEVE_SEARCH_PATIENT";

export const retrieveTesting = createAction(RETRIEVE_TESTING);

export const requestLoginDetails = createAction(REQUEST_LOGIN_DETAILS);

export const retrieveLoginDetails = createAction(RETRIEVE_LOGIN_DETAILS);

export const requestSearchPatient = createAction(REQUEST_SEARCH_PATIENT);

export const retrieveSearchPatient = createAction(RETRIEVE_SEARCH_PATIENT);
