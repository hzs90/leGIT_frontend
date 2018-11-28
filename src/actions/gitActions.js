import { GET_ERRORS, GET_GIT_USERS } from "./types";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

// Get GIT User
export const getGitUser = () => dispatch => {
  //temporary fix to override git api authorization
  setAuthToken(false);
  axios
    .get("https://api.github.com/users")
    .then(res =>
      dispatch({
        payload: res.data,
        type: GET_GIT_USERS
      })
    )
    .catch(error =>
      dispatch({
        payload: error.response.data,
        type: GET_ERRORS
      })
    );
};
