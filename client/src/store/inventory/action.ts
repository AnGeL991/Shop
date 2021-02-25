import { InventoryActionTypes } from './types';
import { API_URL } from 'config';
import { Dispatch } from 'redux'
import axios from 'axios';


/* Selectors */

const setSortOption = (option: string) => ({
  type: InventoryActionTypes.SET_SORT_OPTION,
  payload: option
})
const setMinPrice = (minPrice: number) => ({
  type: InventoryActionTypes.SET_MIN_PRICE,
  payload: minPrice
})
const setMaxPrice = (maxPrice: number) => ({
  type: InventoryActionTypes.SET_MAX_PRICE,
  payload: maxPrice
})
const setSearchValue = (value: string) => ({
  type: InventoryActionTypes.SET_SEARCH_VALUE,
  payload: value
})
const setCategory = (category: string) => ({
  type: InventoryActionTypes.SET_CATEGORY,
  payload: category,
})
const setFilterPrice = (price:number) =>({
  type:InventoryActionTypes.SET_FILTER_PRICE,
  payload: price
})
const startLoading = () => ({
  type: InventoryActionTypes.START_REQUEST,
})
const doneFetchingAppData = (data: Array<{}>) => ({
  type: InventoryActionTypes.END_REQUEST,
  payload: data
})
const errorFetchingAppData = (error: string) => ({
  type: InventoryActionTypes.ERROR_REQUEST,
  payload: error
})


export const actions = {
  startLoading,
  doneFetchingAppData,
  errorFetchingAppData,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSortOption,
  setSearchValue,
  setFilterPrice
}



export const fetchRequest = () => {
  return async (dispatch: Dispatch) => {
    dispatch(actions.startLoading())
    try {
      let res = await axios.get(`${API_URL}/products`)
      return dispatch(actions.doneFetchingAppData(res.data.product));
    } catch (error) {
      return dispatch(actions.errorFetchingAppData(error));
    }
  }
}

// SOC 

// store - to jedno
// api to drugie

// class API

// stora

// Abstract(api, store)