import { Reducer } from "redux";
import { UserActionType, UserState } from "./types";
import { UserReduxProcess } from "./userLogic";

const initialState: UserState = {
  token: JSON.parse(localStorage.getItem("Token") || ""),
  isAuthenticated: false,
  loading: false,
  data: {},
  orders: [],
  wish: [],
};

const {
  USER_LOADED,
  USER_LOADING,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_ORDERS,
  USER_WISH,
} = UserActionType;

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return UserReduxProcess.userLoading(state, action);
    case USER_LOADED:
      return UserReduxProcess.userLoaded(state, action);
    case LOGIN_REQUEST:
      return UserReduxProcess.loginRequest(state, action);
    case LOGIN_SUCCESS:
      return UserReduxProcess.loginSuccess(state, action);
    case LOGOUT:
      return UserReduxProcess.logout(state, action);
    case USER_ORDERS:
      return UserReduxProcess.userOrders(state, action);
    case USER_WISH:
      return UserReduxProcess.userWish(state, action);
    default:
      return state;
  }
};

export { reducer as UserReducer };
