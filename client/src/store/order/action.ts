import { OrderActionTypes, Delivery } from "./types";
import { Inventory } from "../inventory";
import { selector } from "../utils";
import { history } from "_helpers/history";

const {
  ADD_TO_ORDER,
  ADD_TO_ORDER_FAILURE,
  ADD_TO_ORDER_REQUEST,
  UPDATE_ORDER_AMOUNT,
  REMOVE_FROM_ORDER,
  ADD_ADRESS_REQUEST,
  ADD_ADRESS_SUCCESS,
  ADD_ADRESS_FAILURE,
} = OrderActionTypes;

const addOrderRequest = () => selector(ADD_TO_ORDER_REQUEST);
const addOrderSuccess = (item: Inventory) => selector(ADD_TO_ORDER, item);
const addOrderFailure = (error: string) =>
  selector(ADD_TO_ORDER_FAILURE, error);
export const updateOrderAmount = (amount: number, id: string) =>
  selector(UPDATE_ORDER_AMOUNT, { amount, id });
export const deleteOrderProduct = (id: string) =>
  selector(REMOVE_FROM_ORDER, id);

export const addItemToOrder = (item: Inventory) => {
  return (dispatch: Function) => {
    dispatch(addOrderRequest());
    try {
      dispatch(addOrderSuccess(item));
    } catch (error) {
      dispatch(addOrderFailure(error.message));
    }
  };
};

const addAdressRequest = () => selector(ADD_ADRESS_REQUEST);
const addAdressSucces = (data: Delivery) => selector(ADD_ADRESS_SUCCESS, data);
const addAdressFailure = (error: string) => selector(ADD_ADRESS_FAILURE, error);

export const addAdressToDelivery = (data: Delivery) => {
  return async (dispatch: Function) => {
    dispatch(addAdressRequest());
    try {
      await dispatch(addAdressSucces(data));
      history.push("/checkout/payment");
    } catch (error) {
      dispatch(addAdressFailure(error.message));
    }
  };
};
