import { history } from "_helpers/history";
import * as userService from "_services/user.service";
import { UserActionType, User } from "./types";
import { AlertAction } from "../alert";
import { selector } from "../utils";

const userApi = new userService.UserApiHandler();

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  USER_LOADING,
  USER_LOADED,
} = UserActionType;

export const userRequest = (type: UserActionType, user?: any) =>
  selector(type, user);
export const userSuccess = (type: UserActionType, user: Array<{}>) =>
  selector(type, user);
export const userFailure = (type: UserActionType, error: string) =>
  selector(type, error);

export const userLogout = () => selector(LOGOUT);

export const loadUser = (token: string) => {
  return async (dispatch: Function) => {
    dispatch(userRequest(USER_LOADING));
    try {
      const user = await userApi.load(token);
      dispatch(userSuccess(USER_LOADED, user.result));
    } catch (error) {
      dispatch(AlertAction.error(error.message));
    }
  };
};

export function login(email: string, password: string, to?: string) {
  return async (dispatch: Function) => {
    dispatch(userRequest(LOGIN_REQUEST, { email }));
    await userApi.login(email, password).then(
      async (user) => {
        localStorage.setItem("Token", JSON.stringify(user.token));
        dispatch(userSuccess(LOGIN_SUCCESS, user));
        await dispatch(loadUser(user.token));
        history.push(to ? to : "/myAccount");
      },
      (error) => {
        dispatch(userFailure(LOGIN_FAILURE, error.message));
      }
    );
  };
}

export function register(user: User) {
  return async (dispatch: Function) => {
    dispatch(userRequest(REGISTER_REQUEST, user));
    await userApi.register(user).then(
      (user) => {
        dispatch(userSuccess(REGISTER_SUCCESS, user));
        history.push("/login");
        dispatch(AlertAction.success("Rejestracja zakończona powodzeniem"));
      },
      (error) => {
        dispatch(userFailure(REGISTER_FAILURE, error.message));
      }
    );
  };
}
