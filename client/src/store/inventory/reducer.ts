import { Reducer } from 'redux';
import { InventoryActionTypes, InventoryState } from './types';

export const initialState: InventoryState = {
  loading: false,
  errors: undefined,
  data: [],
  search: '',
  minPrice: 0,
  maxPrice: 0,
  category: '',
  sort:'',
  price:0,
}

const reducer: Reducer<InventoryState> = (state = initialState, action) => {
  switch (action.type) {
    case InventoryActionTypes.START_REQUEST: {
      return { ...state, loading: true };
    }
    case InventoryActionTypes.END_REQUEST: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case InventoryActionTypes.ERROR_REQUEST: {
      return { ...state, loading: false, errors: action.payload }
    }
    case InventoryActionTypes.SET_CATEGORY: {
      return { ...state, category: action.payload }
    }
    case InventoryActionTypes.SET_SEARCH_VALUE: {
      return { ...state, search: action.payload }
    }
    case InventoryActionTypes.SET_SORT_OPTION: {
      return { ...state, sort: action.payload }
    }
    case InventoryActionTypes.SET_MAX_PRICE: {
      return { ...state, maxPrice: action.payload }
    }
    case InventoryActionTypes.SET_MIN_PRICE: {
      return { ...state, minPrice: action.payload }
    }
    case InventoryActionTypes.SET_FILTER_PRICE: {
      return {...state,price:action.payload}
    }
    default: {
      return state;
    }
  }
}
export { reducer as InventoryReducer };