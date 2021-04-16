import { CartActionTypes } from "./types";
import { Inventory } from "../inventory";
import { selector } from "../utils";

const {
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  UPDATE_CART_AMOUNT,
  REMOVE_FROM_CART,
  START_LOAD_CART,
  END_LOAD_CART,
  ERROR_LOAD_CART,
} = CartActionTypes;

export const addCartRequest = () => selector(ADD_TO_CART_REQUEST);
export const addCartSuccess = (item: Inventory) => selector(ADD_TO_CART, item);
export const addCartFailure = (error: string) =>
  selector(ADD_TO_CART_FAILURE, error);
export const updateCartAmount = (amount: number, id: string) =>
  selector(UPDATE_CART_AMOUNT, { amount, id });
export const deleteCartProduct = (id: string) => selector(REMOVE_FROM_CART, id);
export const startLoadCart = () => selector(START_LOAD_CART);
export const endLoadCart = (orders: Array<Inventory>) =>
  selector(END_LOAD_CART, orders);
export const errorLoadCart = (error: string) =>
  selector(ERROR_LOAD_CART, error);
