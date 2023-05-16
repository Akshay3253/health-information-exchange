import { takeEvery, call, put } from "redux-saga/effects";
import {
  REQUEST_LOGIN_DETAILS,
  retrieveLoginDetails,
} from "../actions/testAction";
import { loginApi } from "../api/login";

function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action);
    console.log("Response received " + JSON.stringify(response));
  } catch (e) {
  } finally {
    yield put(retrieveLoginDetails());
  }
}

export default function* loginRootSaga() {
  yield takeEvery(REQUEST_LOGIN_DETAILS, loginSaga);
}
