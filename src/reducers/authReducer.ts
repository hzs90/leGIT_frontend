// Reducer for user data and authentication bit

import isEmpty from "../validation/is-empty";
import { SET_CURRENT_USER } from "../actions/types";

interface actionLayout {
  type: string;
  payload: any;
}

const initialState: object = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action: actionLayout) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
