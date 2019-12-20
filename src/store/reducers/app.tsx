import { Reducer } from "redux";
import { PayloadAction } from "store/types";

const reducer: Reducer<App, PayloadAction<App>> = (state = {}, action) => {
  switch (action.type) {
    case "app/save":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}

export default reducer
