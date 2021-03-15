import { Reducer } from "redux";
import { UserActionType, UserState } from "./types";

const initialState: UserState = {
  token: localStorage.getItem("Token"),
  isAuthenticated: false,
  loading: false,
  data: [],
};

const { USER_LOADED, USER_LOADING, LOGIN_SUCCESS, LOGOUT } = UserActionType;

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        data: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem("Token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export { reducer as UserReducer };
