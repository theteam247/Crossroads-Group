import { Action } from "redux";

interface PayloadAction<STATE> extends Action {
  payload: Partial<STATE>;
}
