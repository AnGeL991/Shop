import { OrderActionTypes } from './types';
import { Inventory } from '../inventory/types';
import { Action, Dispatch } from 'redux';
import { ApplicationState } from '../index';


const startLoading = () => ({
  type: OrderActionTypes.START_LOAD_ORDER
})

const successLoading = (state: ApplicationState) => ({
  type: OrderActionTypes.END_LOAD_ORDER,
  payload: state.order
})

const errorLoading = (error: string) => ({
  type: OrderActionTypes.ERROR_LOAD_ORDER,
  payload: error
})

const addToOrder = (item: Inventory) => ({
  type: OrderActionTypes.ADD_TO_ORDER,
  payload: item
})

const addToOrderFailure = (error: string) => ({
  type: OrderActionTypes.ERROR_LOAD_ORDER,
  payload: error,
})
const updateOrderAmount = (amount: number, id: string) => ({
  type: OrderActionTypes.UPDATE_ORDER_AMOUNT,
  payload: {
    amount,
    id
  }
})
const deleteOrderProduct = (id: string) => ({
  type: OrderActionTypes.REMOVE_FROM_ORDER,
  payload: id,
})

export const actions = {
  startLoading,
  successLoading,
  errorLoading,
  addToOrder,
  addToOrderFailure,
  deleteOrderProduct,
  updateOrderAmount,
}


export const fetchOrderREquest = () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    dispatch(actions.startLoading());
    try {
      return dispatch(actions.successLoading(state));
    } catch (e) {
      return dispatch(actions.errorLoading(e));
    }
  };
};


export const addItemToOrder = (item: Inventory) => {
  return (dispatch: Dispatch): Action => {
    try {      
      return dispatch(actions.addToOrder(item));
    } catch (e) {
      return dispatch(actions.addToOrderFailure(e));
    }
  };
};
