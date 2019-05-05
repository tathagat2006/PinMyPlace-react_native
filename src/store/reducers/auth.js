import { AUTH_SET_TOKEN } from "../actions/actionTypes";

const intialState = {
  token: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default reducer;
