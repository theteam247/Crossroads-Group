import { Reducer } from "redux";
import { PayloadAction } from "store/types/payload-action";

const reducer: Reducer<ReposState, PayloadAction<ReposState>> = (
  state = {},
  action
) => {
  switch (action.type) {
    case "repos/save":
      return {
        ...state,
        ...action.payload
      } as ReposState;
    default:
      return state;
  }
};

export default reducer;
