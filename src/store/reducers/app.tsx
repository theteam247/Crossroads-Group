import { Reducer } from "redux";
import { PayloadAction } from "store/types/payload-action";

const reducer: Reducer<AppState, PayloadAction<AppState>> = (
  state = {
    loading: 0,
    refreshing: 0,
    user: "theteam247",
    repo: "theteam247/Crossroads-Group",
    branch: "master"
  },
  action
) => {
  switch (action.type) {
    case "app/save":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
