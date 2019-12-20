import { Reducer } from "redux";
import { PayloadAction } from "store/types/payload-action";

const reducer: Reducer<CommitsState, PayloadAction<CommitsState>> = (
  state = {},
  action
) => {
  switch (action.type) {
    case "commits/save":
      return {
        ...state,
        ...action.payload
      } as CommitsState;
    default:
      return state;
  }
};

export default reducer;
