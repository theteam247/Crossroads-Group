import { Reducer } from "redux";
import { PayloadAction } from "store/types/payload-action";

const reducer: Reducer<BranchesState, PayloadAction<BranchesState>> = (
  state = {},
  action
) => {
  switch (action.type) {
    case "branches/save":
      return {
        ...state,
        ...action.payload
      } as BranchesState;
    default:
      return state;
  }
};

export default reducer;
