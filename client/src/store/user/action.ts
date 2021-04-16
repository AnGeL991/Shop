import { history } from "_helpers/history";
import * as userService from "_services/user.service";
import * as cognitoService from "_services/aws.services";
import { UserActionType, User } from "./types";
import { AlertAction } from "../alert";
import { selector } from "../utils";
import { IAwsUser } from "components/interfaces";

const userApi = new userService.UserApiHandler();
const cognitoApi = new cognitoService.AwsApiHendler();

const {
  awsForgetPassword,
  awsLoad,
  awsLogin,
  awsRegister,
  awsResetPassword,
} = cognitoApi;

const { resetPassword, register, login, load, forgetPassword } = userApi;

const { success, error } = AlertAction;

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADING,
  USER_LOADED,
} = UserActionType;

export const userRequest = (type: UserActionType, user?: any) =>
  selector(type, user);
export const userSuccess = (type: UserActionType, user?: Array<{}> | string) =>
  selector(type, user);
export const userFailure = (type: UserActionType, error: string) =>
  selector(type, error);

export const userLogout = () => selector(LOGOUT);

export const loadUser = (token: string, cognito?: boolean) => {
  return async (dispatch: Function) => {
    dispatch(userRequest(USER_LOADING));
    try {
      const user = !cognito ? await load(token) : await awsLoad(token);
      dispatch(userSuccess(USER_LOADED, user.result));
    } catch (error) {
      dispatch(AlertAction.error(error.message));
    }
  };
};

export function Login(
  email: string,
  password: string,
  to?: string,
  cognito?: boolean
) {
  return async (dispatch: Function) => {
    dispatch(userRequest(LOGIN_REQUEST, { email }));
    try {
      const user = !cognito
        ? await login(email, password)
        : await awsLogin(email, password);
      localStorage.setItem(
        "Token",
        JSON.stringify({ cognito, token: user.token })
      );
      dispatch(userSuccess(LOGIN_SUCCESS, user));
      await dispatch(loadUser(user.token, cognito));
      history.push(to ? to : "/myAccount");
    } catch (err) {
      dispatch(error(err.message));
    }
  };
}

export function Register(user: User | IAwsUser, cognito: boolean) {
  return async (dispatch: Function) => {
    dispatch(AlertAction.clear());
    try {
      !cognito ? await register(user) : await awsRegister(user);
      dispatch(
        AlertAction.success(
          "Rejestracja zakończona powodzeniem dokończ veryfikacje by korzystać z konta"
        )
      );
    } catch (err) {
      dispatch(AlertAction.error(err.message));
    }
  };
}

export function ActiveAccount(token: string) {
  return async (dispatch: Function) => {
    try {
      userApi.activate(token);
      dispatch(success("Veryfikacja zakończona powodzeniem"));
    } catch (err) {
      dispatch(AlertAction.error(err.message));
    }
  };
}

export function ForgetPassword(email: string, cognito?: boolean) {
  return async (dispatch: Function) => {
    try {
      !cognito ? await forgetPassword(email) : await awsForgetPassword(email);
      dispatch(success("Na email został wysłany link do zmiany hasła"));
    } catch (err) {
      dispatch(error(err.message));
    }
  };
}

export function ResetPassword(
  token: string,
  password: string,
  cognito?: boolean
) {
  return async (dispatch: Function) => {
    try {
      !cognito
        ? await resetPassword(token, password)
        : await awsResetPassword(token, password);
      dispatch(success("Hasło zostało zmienione"));
      history.push("/");
    } catch (err) {
      dispatch(error(err.message));
    }
  };
}
