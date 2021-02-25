import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { InventoryState,InventoryReducer } from './inventory';
import {OrderState,orderReducer} from './order'


export interface ApplicationState {
  order: OrderState,
  inventory: InventoryState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    order:orderReducer,
    inventory: InventoryReducer,
    router: connectRouter(history),
});
