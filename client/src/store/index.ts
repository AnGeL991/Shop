import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { InventoryState, InventoryReducer } from "./inventory";
import { OrderState, OrderReducer } from "./order";
import { UserState, UserReducer } from "./user";
import { AlertReducer, alertState } from "./alert";
import { WishState, WishReducer } from "./wishList";
import { PaymentState, PaymentReducer } from "./payment";

export interface ApplicationState {
  order: OrderState;
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
