import { OrderActionTypes } from './types';

import { Inventory } from '../inventory/types';

import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ApplicationState } from '../index';


export const fetchOrderREquest= () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    dispatch({ type: OrderActionTypes.START_LOAD_ORDER });
    try {
      return dispatch({
        type: OrderActionTypes.END_LOAD_ORDER,
        payload: state.order,
      });
    } catch (e) {
      return dispatch({
        type: OrderActionTypes.ERROR_LOAD_ORDER,
      });
    }
  };
};

export const addToOrder: ActionCreator<
  ThunkAction<void, ApplicationState, Inventory, Action<string>>
> = (item) => {
  return (dispatch: Dispatch): Action => {
    console.log(item);
    try {
      return dispatch({
        type: OrderActionTypes.ADD_TO_ORDER,
        payload: item,
      });
    } catch (e) {
      return dispatch({
        type: OrderActionTypes.ADD_TO_ORDER_FAILURE,
        payload: null,
      });
    }
  };
};
