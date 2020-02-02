import { combineReducers } from "redux";
import example, { ExampleState } from "./example";

export interface AppState {
  example: ExampleState;
}

export default combineReducers({ example });
