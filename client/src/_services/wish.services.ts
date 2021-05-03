import { WishProduct, wishAction } from "store/wishList";

import { AlertAction } from "store/alert";

const {
  addRequest,
  addProduct,
  addProductFailure,
  loadRequest,
  loadFailure,
  loadSuccess,
} = wishAction;
const { success, error } = AlertAction;

export default class WishProcess {
  static AddProductToWish = (item: WishProduct) => {
    return (dispatch: Function) => {
      dispatch(addRequest());
      try {
        setTimeout(() => {
          dispatch(success("Product added to wishList"));
          dispatch(addProduct(item));
        }, 3000);
      } catch (err) {
        dispatch(error(err.message));
        dispatch(addProductFailure(err.message));
      }
    };
  };

  static loadWish(wish: Array<WishProduct>) {
    return (dispatch: Function) => {
      dispatch(loadRequest());
      try {
        dispatch(loadSuccess(wish));
      } catch (err) {
        dispatch(loadFailure(err.message));
      }
    };
  }
}
