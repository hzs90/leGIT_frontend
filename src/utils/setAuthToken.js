// using axios function to set the header

import axios from "axios";

const setAuthToken = token => {
  const auth = "Authorization";
  if (token) {
    // Apply to every request
    axios.defaults.headers.common[auth] = token;
  } else {
    // Delete Auth headers
    delete axios.defaults.headers.common[auth];
  }
};

export default setAuthToken;
