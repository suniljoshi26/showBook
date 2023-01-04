import { createStore } from "redux";

import { AnyAction } from "redux";
import { FATCHED_SHOW } from "./Actions";

export type State = {
  show: any[];
};
export const initalState: State = { show: [] };
function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case FATCHED_SHOW:
      return { ...state, show: action.payload };
    default:
      return state;
  }
}
export default reducer;

createStore(reducer);
