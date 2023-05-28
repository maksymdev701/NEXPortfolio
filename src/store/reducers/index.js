import { combineReducers } from "redux";
import { profileReducer } from "./saveReducer";

export default combineReducers({
  profile: profileReducer,
});
