import { selector, dispatchSelector } from "store/utils";
import { WishProduct, WishActionType } from "./types";

const {
  ADD_PRODUCT_TO_WISH,
  REMOVE_PRODUCT_FROM_WISH,
  LOAD_WISH_PRODUCT,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
} = WishActionType;

export const addRequest = () => selector(ADD_PRODUCT_REQUEST);
export const addProduct = (item: WishProduct) =>
  selector(ADD_PRODUCT_TO_WISH, item);
export const addProductFailure = (error: string) =>
  selector(ADD_PRODUCT_FAILURE, error);
export const removeProduct = (id: string) =>
  selector(REMOVE_PRODUCT_FROM_WISH, id);
export const loadWish = () => selector(LOAD_WISH_PRODUCT);

export const AddProductToWish = (item: WishProduct) =>
  dispatchSelector(addRequest, addProduct, [item], addProductFailure);
