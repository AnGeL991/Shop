import { selector } from "store/utils";
import { WishProduct, WishActionType } from "./types";
const {
  ADD_PRODUCT_TO_WISH,
  REMOVE_PRODUCT_FROM_WISH,
  LOAD_WISH_PRODUCT,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  LOAD_FAILURE,
  LOAD_SUCCESS,
  LOAD_REQUEST,
} = WishActionType;

export const loadRequest = () => selector(LOAD_REQUEST);
export const loadSuccess = (wish: Array<WishProduct>) =>
  selector(LOAD_SUCCESS, wish);
export const loadFailure = (error: string) => selector(LOAD_FAILURE, error);
export const addRequest = () => selector(ADD_PRODUCT_REQUEST);
export const addProduct = (item: WishProduct) =>
  selector(ADD_PRODUCT_TO_WISH, item);
export const addProductFailure = (error: string) =>
  selector(ADD_PRODUCT_FAILURE, error);
export const removeProduct = (id: string) =>
  selector(REMOVE_PRODUCT_FROM_WISH, id);
export const loadWish = () => selector(LOAD_WISH_PRODUCT);
