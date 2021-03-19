import { OrderActionTypes } from "./types";
import { Inventory } from "../inventory";
import { selector } from "../utils";

const {
  ADD_TO_ORDER,
  ADD_TO_ORDER_FAILURE,
  ADD_TO_ORDER_REQUEST,
  UPDATE_ORDER_AMOUNT,
  REMOVE_FROM_ORDER,
} = OrderActionTypes;

export const addOrderRequest = () => selector(ADD_TO_ORDER_REQUEST);
export const addOrder = (item: Inventory) => selector(ADD_TO_ORDER, item);
export const addOrderFailure = (error: string) =>
  selector(ADD_TO_ORDER_FAILURE, error);
export const updateOrderAmount = (amount: number, id: string) =>
  selector(UPDATE_ORDER_AMOUNT, { amount, id });
export const deleteOrderProduct = (id: string) =>
  selector(REMOVE_FROM_ORDER, id);

export const addItemToOrder = (item: Inventory) => {
  return (dispatch: Function) => {
    dispatch(addOrderRequest());
    try {
      dispatch(addOrder(item));
    } catch (error) {
      dispatch(addOrderFailure(error.message));
    }
  };
};
