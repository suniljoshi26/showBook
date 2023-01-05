import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";

import { AnyAction } from "redux";
import { FATCHED_SHOW } from "./Actions";
import { rootSaga, sagaMiddlewere } from "./Sagas";

export type State = {
  show: any[];
};
export const initalState: State = { show: [] };
export function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case FATCHED_SHOW:
      return { ...state, show: action.payload };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddlewere))
);
sagaMiddlewere.run(rootSaga);
export default store;
