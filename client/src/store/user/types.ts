import { Inventory, IUser } from "components/interfaces";
import { PaymentState } from "store/payment";

export enum UserActionType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  USER_LOADING = "USER_LOADING",
  USER_LOADED = "USER_LOADED",
  LOGOUT = "LOGOUT",
  USER_ORDERS = "USER__ORDERS",
  USER_WISH = "USER__WISH",
}
export interface UserState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  data: IUser;
  orders: Array<PaymentState>;
  wish?: Array<Inventory>;
}
