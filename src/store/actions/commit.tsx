import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "store/types/payload-action";

export const getCommits = (): ThunkAction<
  any,
  State,
  any,
  PayloadAction<CommitsState>
> => {
  return async (dispatch, getState) => {
    const { app } = getState();
    const res = await fetch(
      `${process.env.REACT_APP_API}/repos/${app.repo}/commits?sha=${app.branch}`
    );
    if (!res.ok) {
      return Promise.reject();
    }

    const data = await res.json();

    dispatch({
      type: "commits/save",
      payload: {
        [app.repo]: data
      }
    });

    return data;
  };
};

export default {
  getCommits
};
