import { Inventory } from "store/inventory";

export interface WishProduct {
  item: Inventory;
}

export enum WishActionType {
  ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST",
  ADD_PRODUCT_TO_WISH = "ADD_PRODUCT_TO_WISH",
  ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE",
  REMOVE_PRODUCT_FROM_WISH = "REMOVE_PRODUCT",
  LOAD_WISH_PRODUCT = "LOAD_WISH_PRODUCT",
}

export interface WishState {
  data: Array<Inventory>;
  errors?: string;
  loading: boolean;
}
