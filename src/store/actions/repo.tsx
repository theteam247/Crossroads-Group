import { ThunkAction } from 'redux-thunk';
import { PayloadAction } from 'store/types/payload-action';

export const getRepos = (): ThunkAction<Promise<Repo[] | null>, State, any, PayloadAction<ReposState>> => {
  return async (dispatch, getState) => {
    const { app } = getState()
    const res = await fetch(`${process.env.REACT_APP_API}/users/${app.user}/repos`)
    if(!res.ok) {
      return Promise.reject();
    }

    const data = await res.json()

    dispatch({
      type: "repos/save",
      payload: {
        [app.user]: data
      }
    })

    return data
  }
}

export default {
  getRepos
}
