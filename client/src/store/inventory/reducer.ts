import { Reducer } from "redux";
import { InventoryActionTypes, InventoryState } from "./types";

export const initialState: InventoryState = {
  loading: false,
  errors: undefined,
  data: [],
  search: "",
  minPrice: 0,
  maxPrice: 0,
  category: "",
  sort: "",
  price: 0,
};
const {
  START_REQUEST,
  END_REQUEST,
  ERROR_REQUEST,
  SET_CATEGORY,
  SET_SEARCH_VALUE,
  SET_SORT_OPTION,
  SET_MAX_PRICE,
  SET_MIN_PRICE,
  SET_FILTER_PRICE,
} = InventoryActionTypes;

const reducer: Reducer<InventoryState> = (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST: {
      return { ...state, loading: true };
    }
    case END_REQUEST: {
      return { ...state, loading: false, data: action.payload };
    }
    case ERROR_REQUEST: {
      return { ...state, loading: false, errors: action.payload };
    }
    case SET_CATEGORY: {
      return { ...state, category: action.payload };
    }
    case SET_SEARCH_VALUE: {
      return { ...state, search: action.payload };
    }
    case SET_SORT_OPTION: {
      return { ...state, sort: action.payload };
    }
    case SET_MAX_PRICE: {
      return { ...state, maxPrice: action.payload };
    }
    case SET_MIN_PRICE: {
      return { ...state, minPrice: action.payload };
    }
    case SET_FILTER_PRICE: {
      return { ...state, price: action.payload };
    }
    default: {
      return state;
    }
  }
};
export { reducer as InventoryReducer };
