import { IAwsUser, IUser } from "components/interfaces";

export interface User extends IUser, IAwsUser {}

export enum UserActionType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  USER_LOADING = "USER_LOADING",
  USER_LOADED = "USER_LOADED",
  LOGOUT = "LOGOUT",
  USE_COGNITO = "USE_COGNITO",
}
export interface UserState {
  cognito: boolean;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  data: User;
}
