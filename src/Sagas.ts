import { call, put } from "@redux-saga/core/effects";
import { takeLeading } from "redux-saga/effects";
import { fatchedShowAction } from "./Actions";
import { getShow } from "./api";
export function* fatchshow(): Generator<any, any, any> {
  const data = yield call(getShow);
  const action = fatchedShowAction(data);
  yield put(action);
}

export function* rootSaga() {
  yield takeLeading(fatchshow);
}
