import { ThunkAction } from 'redux-thunk';
import { PayloadAction } from 'store/types/payload-action';

export const getBranches = (): ThunkAction<any, State, any, PayloadAction<BranchesState>> => {
  return async (dispatch, getState) => {
    const { app } = getState()
    const res = await fetch(`${process.env.REACT_APP_API}/repos/${app.repo}/branches`)
    if(!res.ok) {
      return Promise.reject();
    }
    
    const data = await res.json()

    dispatch({
      type: "branches/save",
      payload: {
        [app.repo]: data
      }
    })

    return data
  }
}

export default {
  getBranches
}
