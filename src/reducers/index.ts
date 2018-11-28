import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import gitReducer from "./gitReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  git: gitReducer
});
