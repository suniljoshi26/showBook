import { call, put } from "@redux-saga/core/effects";
import { takeLeading } from "redux-saga/effects";
import { fatchedShowAction, FATCH_SHOW } from "./Actions";
import { getShow } from "./api";
import createSagaMiddleware from "@redux-saga/core";

export const sagaMiddlewere = createSagaMiddleware();
export function* fatchShowSaga(): Generator<any, any, any> {
  const data = yield call(getShow);
  const action = fatchedShowAction(data);
  yield put(action);
}

export function* rootSaga() {
  yield takeLeading(FATCH_SHOW, fatchShowSaga);
}
