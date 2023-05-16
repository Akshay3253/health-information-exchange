import { createAction } from "redux-actions";

export const RETRIEVE_TESTING = "RETRIEVE_TESTING";
export const REQUEST_LOGIN_DETAILS = "REQUEST_LOGIN_DETAILS";

export const RETRIEVE_LOGIN_DETAILS = "RETRIEVE_LOGIN_DETAILS";

export const retrieveTesting = createAction(RETRIEVE_TESTING);

export const requestLoginDetails = createAction(REQUEST_LOGIN_DETAILS);

export const retrieveLoginDetails = createAction(RETRIEVE_LOGIN_DETAILS);
