import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { InventoryState } from './inventory/types';
import { InventoryReducer } from './inventory/reducer';

// import {InventoryState, InventoryReducer} from './inventory'

import {OrderState} from './order/types'
import {orderReducer} from './order/reducer';


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
