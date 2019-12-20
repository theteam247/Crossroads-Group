import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "store/types/payload-action";
import fetch from "utils/fetch";

export const getCommits = (): ThunkAction<
  any,
  State,
  any,
  PayloadAction<CommitsState>
> => {
  return async (dispatch, getState) => {
    const { app } = getState();
    const res = await fetch.get<Commit[]>(
      `${process.env.REACT_APP_API}/repos/${app.repo}/commits?sha=${app.branch}`
    );

    dispatch({
      type: "commits/save",
      payload: {
        [app.repo]: res.data
      }
    });

    return res.data;
  };
};

export default {
  getCommits
};
