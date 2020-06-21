import { SET_AUTHOR } from "../Constants/Author";

const defaultState = {
  author: "Guest",
};

const AuthorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    default:
      return state;
  }
};

export default AuthorReducer;
