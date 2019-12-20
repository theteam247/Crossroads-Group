import { ThunkAction } from 'redux-thunk';
import { PayloadAction } from 'store/types/payload-action';

export const getCommits = (): ThunkAction<any, State, any, PayloadAction<CommitsState>> => {
  return async (dispatch, getState) => {
    const { app } = getState()
    const res = await fetch(`${process.env.REACT_APP_API}/repos/${app.repo}/commits`)
    const data = await res.json()

    dispatch({
      type: "commits/save",
      payload: {
        [`${app.repo}`]: data
      }
    })
  }
}

export default {
  getCommits
}
