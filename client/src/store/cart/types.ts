import { Inventory } from "store/inventory";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE",
  ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART_AMOUNT = "UPDATE_CART_AMOUNT",
  START_LOAD_CART = "START_LOAD_REQUEST",
  END_LOAD_CART = "END_LOAD_CART",
  ERROR_LOAD_CART = "ERROR_LOAD_CART",
}

export interface CartState {
  count: number;
  items: Inventory[];
  totalPrice: number;
  loading?: boolean;
  errors?: string;
}
