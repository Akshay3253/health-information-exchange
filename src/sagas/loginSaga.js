import { takeEvery, call, put } from "redux-saga/effects";
import {
  REQUEST_LOGIN_DETAILS,
  retrieveLoginDetails,
} from "../actions/testAction";
import { loginApi } from "../api/login";

function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action);
    yield put(retrieveLoginDetails(response));
  } catch (e) {
    console.log(e);
  }
}

export default function* loginRootSaga() {
  yield takeEvery(REQUEST_LOGIN_DETAILS, loginSaga);
}
