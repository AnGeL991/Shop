import { Inventory } from "store/inventory";
import { CartActions } from "store/cart";

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
        dispatch(addCartSuccess(item));
      } catch (error) {
        dispatch(addCartFailure(error.message));
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
