import { Inventory, InventoryActionTypes } from "./types";
import { selector } from "../utils";

const {
  SET_SORT_OPTION,
  SET_MIN_PRICE,
  SET_SEARCH_VALUE,
  SET_CATEGORY,
  SET_FILTER_PRICE,
  SET_MAX_PRICE,
  START_REQUEST,
  END_REQUEST,
  ERROR_REQUEST,
} = InventoryActionTypes;

export const setSortOption = (option: string) =>
  selector(SET_SORT_OPTION, option);
export const setMinPrice = (minPrice: number) =>
  selector(SET_MIN_PRICE, minPrice);
export const setMaxPrice = (maxPrice: number) =>
  selector(SET_MAX_PRICE, maxPrice);
export const setSearchValue = (value: string) =>
  selector(SET_SEARCH_VALUE, value);
export const setCategory = (category: string) =>
  selector(SET_CATEGORY, category);
export const setFilterPrice = (price: number) =>
  selector(SET_FILTER_PRICE, price);
export const startLoading = () => selector(START_REQUEST);
export const doneFetchingAppData = (data: Array<Inventory>) =>
  selector(END_REQUEST, data);
export const errorFetchingAppData = (error: string) =>
  selector(ERROR_REQUEST, error);
