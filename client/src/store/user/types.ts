import { IUser } from "components/interface";

export interface User extends IUser {}

export enum UserActionType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  USER_LOADING = "USER_LOADING",
  USER_LOADED = "USER_LOADED",
  LOGOUT = "LOGOUT",
}
export interface UserState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  data: User[];
}
