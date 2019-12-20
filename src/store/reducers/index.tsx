import { combineReducers } from "redux";

import app from "./app"
import repos from "./repos"
import commits from "./commits"

export default combineReducers({
  app,
  repos,
  commits
});
