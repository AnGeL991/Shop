import { Reducer } from "redux";
import { InventoryActionTypes, InventoryState } from "./types";
import { InventoryReduxProcesses } from "./inventoryLogic";
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
      return InventoryReduxProcesses.startRequest(state, action);
    }
    case END_REQUEST: {
      return InventoryReduxProcesses.endRequest(state, action);
    }
    case ERROR_REQUEST: {
      return InventoryReduxProcesses.errorRequest(state, action);
    }
    case SET_CATEGORY: {
      return InventoryReduxProcesses.setCategory(state, action);
    }
    case SET_SEARCH_VALUE: {
      return InventoryReduxProcesses.setSearch(state, action);
    }
    case SET_SORT_OPTION: {
      return InventoryReduxProcesses.setSortOption(state, action);
    }
    case SET_MAX_PRICE: {
      return InventoryReduxProcesses.setMaxPrice(state, action);
    }
    case SET_MIN_PRICE: {
      return InventoryReduxProcesses.setMinPrice(state, action);
    }
    case SET_FILTER_PRICE: {
      return InventoryReduxProcesses.setFilterPrice(state, action);
    }
    default: {
      return state;
    }
  }
};
export { reducer as InventoryReducer };
