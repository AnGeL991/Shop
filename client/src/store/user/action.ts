import { history } from "_helpers/history";
import * as userService from "_services/user.service";
import { UserActionType } from "./types";
import { AlertAction } from "../alert";
import { selector } from "../utils";
import { Inventory, IUser } from "components/interfaces";
import { PaymentState } from "store/payment";
const userApi = new userService.UserApiHandler();

const { resetPassword, register, login, load, forgetPassword } = userApi;

const { success, error } = AlertAction;

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADING,
  USER_LOADED,
  USER_ORDERS,
  USER_WISH,
} = UserActionType;

export const userRequest = (type: UserActionType, user?: any) =>
  selector(type, user);
export const userSuccess = (type: UserActionType, user?: Array<{}> | string) =>
  selector(type, user);
export const userFailure = (type: UserActionType, error: string) =>
  selector(type, error);
export const userOrders = (order: PaymentState[]) =>
  selector(USER_ORDERS, order);

export const userWish = (wishItem: Inventory[]) =>
  selector(USER_WISH, wishItem);

export const userLogout = () => selector(LOGOUT);

export const loadUser = (token: string) => {
  return async (dispatch: Function) => {
    dispatch(userRequest(USER_LOADING));
    try {
      const user = await load(token);
      dispatch(userSuccess(USER_LOADED, user.result));
    } catch (error) {
      dispatch(AlertAction.error(error.message));
    }
  };
};

export function Login(email: string, password: string, to?: string) {
  return async (dispatch: Function) => {
    dispatch(userRequest(LOGIN_REQUEST, { email }));
    try {
      const user = await login(email, password);
      localStorage.setItem("Token", JSON.stringify(user.token));
      dispatch(userSuccess(LOGIN_SUCCESS, user));
      await dispatch(loadUser(user.token));
      history.push(to ? to : "/myAccount");
    } catch (err) {
      dispatch(error(err.message));
    }
  };
}

export function Register(user: IUser, cognito: boolean) {
  return async (dispatch: Function) => {
    dispatch(AlertAction.clear());
    try {
      await register(user);
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
      await forgetPassword(email);
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
      await resetPassword(token, password);
      dispatch(success("Hasło zostało zmienione"));
      history.push("/");
    } catch (err) {
      dispatch(error(err.message));
    }
  };
}
