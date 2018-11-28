// receving errors from API

import { GET_ERRORS } from "../actions/types";

interface actionLayout {
  type: string;
  payload: any;
}

const initialState: object = {};

export default function(state = initialState, action: actionLayout) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
