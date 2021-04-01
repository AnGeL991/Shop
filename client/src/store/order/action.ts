import { OrderActionTypes } from "./types";
import { Inventory } from "../inventory";
import { selector } from "../utils";

const {
  ADD_TO_ORDER,
  ADD_TO_ORDER_FAILURE,
  ADD_TO_ORDER_REQUEST,
  UPDATE_ORDER_AMOUNT,
  REMOVE_FROM_ORDER,
  START_LOAD_ORDER,
  END_LOAD_ORDER,
  ERROR_LOAD_ORDER,
} = OrderActionTypes;

export const addOrderRequest = () => selector(ADD_TO_ORDER_REQUEST);
export const addOrderSuccess = (item: Inventory) =>
  selector(ADD_TO_ORDER, item);
export const addOrderFailure = (error: string) =>
  selector(ADD_TO_ORDER_FAILURE, error);
export const updateOrderAmount = (amount: number, id: string) =>
  selector(UPDATE_ORDER_AMOUNT, { amount, id });
export const deleteOrderProduct = (id: string) =>
  selector(REMOVE_FROM_ORDER, id);
export const startLoadOrder = () => selector(START_LOAD_ORDER);
export const endLoadOrder = (orders: Array<Inventory>) =>
  selector(END_LOAD_ORDER, orders);
export const errorLoadOrder = (error: string) =>
  selector(ERROR_LOAD_ORDER, error);
