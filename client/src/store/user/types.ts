export interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  passwordConfirmation?: string;
  regulations?: boolean;
  newsletter?: boolean;
}

export enum UserActionType {
  REGISTER_REQUEST = "REGISTER_REQUEST",
  REGISTER_SUCCESS = " REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  USER_LOADING = "USER_LOADING",
  USER_LOADED = "USER_LOADED",
  LOGOUT = "LOGOUT",
}
export interface UserState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  data: User[];
  errors?: string;
}
