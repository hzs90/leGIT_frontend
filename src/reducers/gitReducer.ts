// GET git data from git api

import { GET_GIT_USERS } from "../actions/types";

const initialState: Array<object> = [
  {
    id: "1",
    login: "login",
    avatar_url: "avatar_url",
    followers_url: "followers_url",
    github: "github"
  }
];

interface actionLayout {
  type: string;
  payload: Array<object>;
}

export default function(state = initialState, action: actionLayout) {
  switch (action.type) {
    case GET_GIT_USERS:
      return action.payload;
    default:
      return state;
  }
}
