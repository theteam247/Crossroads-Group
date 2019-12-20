import { ThunkAction } from 'redux-thunk';
import { PayloadAction } from 'store/types/payload-action';

export const updateApp = (data: Partial<AppState>): ThunkAction<any, State, any, PayloadAction<AppState>> => {
  return async (dispatch) => {
    dispatch({
      type: "app/save",
      payload: data
    })
  }
}

export default {
  updateApp
}
