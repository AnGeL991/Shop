import { history } from "_helpers/history";
import * as userService from "_services/user.service";
import { UserActionType, User } from "./types";
import { AlertAction } from "../alert";
import { selector } from "../utils";

const userApi = new userService.UserApiHandler();

const {
  activate,
  resetPassword,
  register,
  login,
  load,
  forgetPassword,
} = userApi;
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
    await login(email, password).then(
      async (user) => {
        localStorage.setItem("Token", JSON.stringify(user.token));
        dispatch(userSuccess(LOGIN_SUCCESS, user));
        await dispatch(loadUser(user.token));
        history.push(to ? to : "/myAccount");
      },
      (err) => {
        dispatch(error(err.message));
      }
    );
  };
}

export function Register(user: User) {
  return async (dispatch: Function) => {
    dispatch(AlertAction.clear());
    await register(user).then(
      () => {
        dispatch(
          dispatch(
            AlertAction.success(
              "Rejestracja zakończona powodzeniem dokończ veryfikacje by korzystać z konta"
            )
          )
        );
      },
      (error) => {
        dispatch(AlertAction.error(error.message));
      }
    );
  };
}

export function ActiveAccount(token: string) {
  return async (dispatch: Function) => {
    await activate(token).then(() => {
      dispatch(success("Veryfikacja zakończona powodzeniem"));
    });
  };
}

export function ForgetPassword(email: string) {
  return async (dispatch: Function) => {
    await forgetPassword(email).then(
      () => {
        dispatch(success("Na email został wysłany link do zmiany hasła"));
      },
      (err) => {
        dispatch(error(err.message));
      }
    );
  };
}

export function ResetPassword(token: string, password: string) {
  return async (dispatch: Function) => {
    await resetPassword(token, password).then(
      () => {
        dispatch(success("Hasło zostało zmienione"));
        history.push("/");
      },
      (err) => {
        dispatch(error(err.message));
      }
    );
  };
}
