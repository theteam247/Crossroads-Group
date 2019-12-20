import { combineReducers } from "redux";

import app from "./app"
import repos from "./repos"
import branches from "./branches"
import commits from "./commits"

export default combineReducers({
  app,
  repos,
  branches,
  commits
});
