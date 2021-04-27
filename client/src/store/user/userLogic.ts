import { AnyAction } from "redux";
import { PaymentState } from "store/payment";
import { client } from "_api";
import { UserState } from "./types";

export class UserPrepare {
  static checkAccountStatus(orders: Array<PaymentState>, token: string | null) {
    const paidOrder = orders.filter((el) => el.paymentStatus.paid === true);
    const acountStatus = paidOrder.reduce(
      (total, item) => (total + item.totalPayment) / 1000,
      0
    );
    if (token && acountStatus < 6) {
      client("users/status", { status: Math.floor(acountStatus) }, token, {
        method: "PUT",
      });
    }
  }
}

export class UserReduxProcess {
  static userLoading(state: UserState, action: AnyAction) {
    return {
      ...state,
      loading: true,
    };
  }
  static userLoaded(state: UserState, action: AnyAction) {
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      data: action.payload,
    };
  }
  static loginRequest(state: UserState, action: AnyAction) {
    return {
      ...state,
      loading: true,
    };
  }
  static loginSuccess(state: UserState, action: AnyAction) {
    return {
      ...state,
      ...action.payload,
      isAuthenticated: true,
      loading: false,
      error: null,
    };
  }
  static logout(state: UserState, action: AnyAction) {
    localStorage.removeItem("Token");
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      data: [],
      loading: false,
      orders: [],
      wish: [],
    };
  }
  static userOrders(state: UserState, action: AnyAction) {
    UserPrepare.checkAccountStatus([...action.payload], state.token);
    if (state.orders.length > 0) {
      return {
        ...state,
        orders: [...state.orders, ...action.payload],
      };
    }
    return {
      ...state,
      orders: [...action.payload],
    };
  }
  static userWish(state: UserState, action: AnyAction) {
    return {
      ...state,
      wish: [...action.payload],
    };
  }
}
