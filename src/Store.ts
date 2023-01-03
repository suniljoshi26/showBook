import { createStore } from "redux";

import { AnyAction } from "redux";

export type State = {};
export const initalState: State = {};
function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;

createStore(reducer);
