import { ADD_USER } from "../Constants/User";

const initialUserState = [];

const UserReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default UserReducer;
