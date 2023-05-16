import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";

export default function* rootSaga() {
  //yield all sagas inside the all([...])
  yield all([loginSaga()]);
}
