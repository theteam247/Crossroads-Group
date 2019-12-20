import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "store/types/payload-action";
import fetch from "utils/fetch";

export const getRepos = (): ThunkAction<
  Promise<Repo[] | null>,
  State,
  any,
  PayloadAction<ReposState>
> => {
  return async (dispatch, getState) => {
    const { app } = getState();
    const res = await fetch.get<Repo[]>(
      `${process.env.REACT_APP_API}/users/${app.user}/repos`
    );

    dispatch({
      type: "repos/save",
      payload: {
        [app.user]: res.data
      }
    });

    return res.data;
  };
};

export default {
  getRepos
};
