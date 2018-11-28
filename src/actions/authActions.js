import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(error =>
      dispatch({
        payload: error.response.data,
        type: GET_ERRORS
      })
    );
};

// Login - Get User token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      // Set token to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(error =>
      dispatch({
        payload: error.response.data,
        type: GET_ERRORS
      })
    );
};

// Check if log in still valid - Get User token
export const checkToken = () => dispatch => {
  // Get token from, localStorage
  const token = localStorage.getItem("jwtToken");
  // Set current user
  dispatch(setCurrentUser(token));
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    payload: decoded,
    type: SET_CURRENT_USER
  };
};

// Log user Route
export const logoutUser = history => dispatch => {
  // remove token from localStorage
  localStorage.removeItem("jwtToken");
  // remove auth header
  setAuthToken(false);
  // Set current to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
