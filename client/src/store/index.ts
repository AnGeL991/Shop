import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { InventoryState, InventoryReducer } from "./inventory";
import { CartState, OrderReducer } from "./cart";
import { UserState, UserReducer } from "./user";
import { AlertReducer, alertState } from "./alert";
import { WishState, WishReducer } from "./wishList";
import { PaymentState, PaymentReducer } from "./payment";

export interface ApplicationState {
  order: CartState;
  payment: PaymentState;
  inventory: InventoryState;
  user: UserState;
  wish: WishState;
  alert: alertState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    order: OrderReducer,
    payment: PaymentReducer,
    inventory: InventoryReducer,
    user: UserReducer,
    wish: WishReducer,
    alert: AlertReducer,
    router: connectRouter(history),
  });
