import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "store/types/payload-action";
import fetch from "utils/fetch";

export const getBranches = (): ThunkAction<
  any,
  State,
  any,
  PayloadAction<BranchesState>
> => {
  return async (dispatch, getState) => {
    const { app } = getState();
    const res = await fetch.get<Branch[]>(
      `${process.env.REACT_APP_API}/repos/${app.repo}/branches`
    );

    dispatch({
      type: "branches/save",
      payload: {
        [app.repo]: res.data
      }
    });

    return res.data;
  };
};

export default {
  getBranches
};
