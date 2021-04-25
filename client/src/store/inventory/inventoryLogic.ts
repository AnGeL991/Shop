import { AnyAction } from "redux";
import { InventoryState } from "./types";

export class InventoryReduxProcesses {
  static startRequest(state: InventoryState, action: AnyAction) {
    return { ...state, loading: true };
  }
  static endRequest(state: InventoryState, action: AnyAction) {
    return { ...state, loading: false, data: action.payload };
  }
  static errorRequest(state: InventoryState, action: AnyAction) {
    return { ...state, loading: false, errors: action.payload };
  }
  static setCategory(state: InventoryState, action: AnyAction) {
    return { ...state, category: action.payload };
  }
  static setSearch(state: InventoryState, action: AnyAction) {
    return { ...state, search: action.payload };
  }
  static setSortOption(state: InventoryState, action: AnyAction) {
    return { ...state, sort: action.payload };
  }
  static setMaxPrice(state: InventoryState, action: AnyAction) {
    return { ...state, maxPrice: action.payload };
  }
  static setMinPrice(state: InventoryState, action: AnyAction) {
    return { ...state, minPrice: action.payload };
  }
  static setFilterPrice(state: InventoryState, action: AnyAction) {
    return { ...state, price: action.payload };
  }
}
