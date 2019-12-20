import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "store/types/payload-action";

export const updateApp = (
  data: Partial<AppState>
): ThunkAction<any, State, any, PayloadAction<AppState>> => {
  return async dispatch => {
    dispatch({
      type: "app/save",
      payload: data
    });
  };
};

export const load = (
  count: number
): ThunkAction<any, State, any, PayloadAction<AppState>> => {
  return async (dispatch, getState) => {
    setTimeout(() => {
      const { app } = getState();
      const loading = app.loading + count;

      dispatch({
        type: "app/save",
        payload: {
          loading: loading > 0 ? loading : 0
        }
      });
    });
  };
};

export default {
  updateApp,
  load
};
