import { ThunkAction } from 'redux-thunk';
import { PayloadAction } from 'store/types/payload-action';

export const getRepos = (): ThunkAction<any, State, any, PayloadAction<ReposState>> => {
  return async (dispatch, getState) => {
    const { app } = getState()
    const res = await fetch(`${process.env.REACT_APP_API}/users/${app.user}/repos`)
    const data = await res.json()

    dispatch({
      type: "repos/save",
      payload: {
        [app.user]: data
      }
    })
  }
}

export default {
  getRepos
}
