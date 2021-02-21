import { InventoryActionTypes } from './types';
import { ActionCreator, Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk';

import { ApplicationState } from '../index';

import { products } from 'db/db';

// pozbyc sie appThunk 

export type AppThunk = ActionCreator<ThunkAction<void, ApplicationState, null, Action<string>>>;


// const startLoading = () => ({
//   type: InventoryActionTypes.START_REQUEST,
// })
// const doneFetchingAppData = (payload) => ({
//   type: InventoryActionTypes.END_REQUEST,
//   payload
// })
// const errorFetchingAppData = (payload) => ({
//   type: InventoryActionTypes.ERROR_REQUEST,
//   payload
// })


// const actions = {
//   startLoading,
//   doneFetchingAppData,
//   errorFetchingAppData
// }



export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    dispatch({
      type: InventoryActionTypes.START_REQUEST,
    })
    try {

      return dispatch({
        type: InventoryActionTypes.END_REQUEST,
        payload: products
      });
    } catch (e) {
      return dispatch({
        type: InventoryActionTypes.ERROR_REQUEST
      });
    }
  }
}

// SOC 

// store - to jestno
// api to drugie

// class API

// stora

// Abstract(api, store)