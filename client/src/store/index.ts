import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { InventoryState, InventoryReducer } from "./inventory";
import { OrderState, orderReducer } from "./order";
import { UserState, UserReducer } from "./user";
import { alertReducer, alertState } from "./alert";

export interface ApplicationState {
  order: OrderState;
  inventory: InventoryState;
  router: RouterState;
  user: UserState;
  alert: alertState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    order: orderReducer,
    inventory: InventoryReducer,
    user: UserReducer,
    alert: alertReducer,
    router: connectRouter(history),
  });
