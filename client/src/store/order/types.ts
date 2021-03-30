import { Inventory } from "store/inventory";

export interface Order {
  count: number;
  items: Inventory[];
  totalPrice: number;
}

export enum OrderActionTypes {
  ADD_TO_ORDER = "ADD_TO_ORDER",
  ADD_TO_ORDER_FAILURE = "ADD_TO_ORDER_FAILURE",
  ADD_TO_ORDER_REQUEST = "ADD_TO_ORDER_REQUEST",
  REMOVE_FROM_ORDER = "REMOVE_FROM_ORDER",
  UPDATE_ORDER_AMOUNT = "UPDATE_ORDER_AMOUNT",
  START_LOAD_ORDER = "START_LOAD_REQUEST",
  END_LOAD_ORDER = "END_LOAD_ORDER",
  ERROR_LOAD_ORDER = "ERROR_LOAD_ORDER",
}

export interface OrderState {
  loading?: boolean;
  order: Order;
  errors?: string;
}
