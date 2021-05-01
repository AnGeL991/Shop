import { Inventory } from "store/inventory";
import { CartActions } from "store/cart";
import { AlertAction } from "store/alert";
const {
  addCartFailure,
  addCartRequest,
  addCartSuccess,
  updateCartAmount,
  startLoadCart,
  endLoadCart,
  deleteCartProduct,
  errorLoadCart,
} = CartActions;

const { success, error } = AlertAction;
export default class CartProcess {
  static loadOrderFromLocalStorage(items: Array<Inventory>) {
    return (dispatch: Function) => {
      dispatch(startLoadCart());
      try {
        dispatch(endLoadCart(items));
      } catch (error) {
        dispatch(errorLoadCart(error.message));
      }
    };
  }
  static addtoOrder(item: Inventory) {
    return (dispatch: Function) => {
      dispatch(addCartRequest());
      try {
        setTimeout(() => {
          dispatch(success("Product added to cart"));
          dispatch(addCartSuccess(item));
        }, 3000);
      } catch (err) {
        dispatch(error(err.message));
        dispatch(addCartFailure(err.message));
      }
    };
  }

  static deleteFromOrder(id: string) {
    return deleteCartProduct(id);
  }
  static updateItem(amount: number, id: string) {
    return updateCartAmount(amount, id);
  }
}
