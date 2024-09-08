import { LOGIN_SUCCESS } from "../actions/authActions";

const initialState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, 
        user: action.payload,
        token: action.token,
        isLoggedIn: true,
      };
    default:
      return state;
  }

}

export default authReducer;