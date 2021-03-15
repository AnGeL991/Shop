import { OrderActionTypes } from "./types";
import { Inventory } from "../inventory/types";
import { Action, Dispatch } from "redux";
import { ApplicationState } from "../index";
import { selector } from "../utils";

const {
  START_LOAD_ORDER,
  END_LOAD_ORDER,
  ERROR_LOAD_ORDER,
  ADD_TO_ORDER,
  ADD_TO_ORDER_FAILURE,
  UPDATE_ORDER_AMOUNT,
  REMOVE_FROM_ORDER,
} = OrderActionTypes;

export const startLoading = () => selector(START_LOAD_ORDER);
export const successLoading = (state: ApplicationState) =>
  selector(END_LOAD_ORDER, state);
export const errorLoading = (error: string) => selector(ERROR_LOAD_ORDER, error);
export const addToOrder = (item: Inventory) => selector(ADD_TO_ORDER, item);
export const addToOrderFailure = (error: string) =>
  selector(ADD_TO_ORDER_FAILURE, error);
export const updateOrderAmount = (amount: number, id: string) =>
  selector(UPDATE_ORDER_AMOUNT, { amount, id });
export const deleteOrderProduct = (id: string) => selector(REMOVE_FROM_ORDER, id);


// export const fetchOrderREquest = () => {
//   return (dispatch: Dispatch, state: ApplicationState): Action => {
//     dispatch(actions.startLoading());
//     try {
//       return dispatch(actions.successLoading(state));
//     } catch (e) {
//       return dispatch(actions.errorLoading(e));
//     }
//   };
// };

export const addItemToOrder = (item: Inventory) => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch(addToOrder(item));
    } catch (e) {
      return dispatch(addToOrderFailure(e));
    }
  };
};

