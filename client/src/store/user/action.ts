import { history } from "_helpers/history";
import * as userService from "_services/user.service";
import { UserActionType, User } from "./types";
import { alertAction } from "../alert";
import { selector } from "../utils";

const userApi = new userService.UserApiHandler();

const {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} = UserActionType;

export const request = (type: UserActionType, user: any) =>
  selector(type, user);
export const success = (type: UserActionType, user: Array<{}>) =>
  selector(type, user);
export const failure = (type: UserActionType, user: any) =>
  selector(type, user);
export const logout = (type: UserActionType.LOGOUT) => selector(type);

export function login(email: string, password: string) {
  return (dispatch: Function) => {
    dispatch(request(LOGIN_REQUEST, { email }));
    userApi.login(email, password).then(
      (user) => {
        localStorage.setItem("Token", JSON.stringify(user));
        dispatch(success(LOGIN_SUCCESS, user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(LOGIN_FAILURE, error.message));
        dispatch(alertAction.error(error.message));
      }
    );
  };
}

export function register(user: User) {
  return (dispatch: Function) => {
    dispatch(request(REGISTER_REQUEST, user));
    userApi.register(user).then(
      (user) => {
        dispatch(success(REGISTER_SUCCESS, user));
        history.push("/login");
        dispatch(alertAction.success("Rejestracja zakończona powodzeniem"));
      },
      (error) => {
        dispatch(failure(REGISTER_FAILURE, error.message));
        dispatch(alertAction.error(error.message));
      }
    );
  };
}
