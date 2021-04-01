import { Inventory } from "store/inventory";
import { OrderActions } from "store/order";

const {
  addOrderRequest,
  addOrderFailure,
  addOrderSuccess,
  deleteOrderProduct,
  updateOrderAmount,
  startLoadOrder,
  endLoadOrder,
  errorLoadOrder,
} = OrderActions;

export default class OrderProcess {
  static loadOrderFromLocalStorage(items: Array<Inventory>) {
    return (dispatch: Function) => {
      dispatch(startLoadOrder());
      try {
        dispatch(endLoadOrder(items));
      } catch (error) {
        dispatch(errorLoadOrder(error.message));
      }
    };
  }
  static addtoOrder(item: Inventory) {
    return (dispatch: Function) => {
      dispatch(addOrderRequest());
      try {
        dispatch(addOrderSuccess(item));
      } catch (error) {
        dispatch(addOrderFailure(error.message));
      }
    };
  }

  static deleteFromOrder(id: string) {
    return deleteOrderProduct(id);
  }
  static updateItem(amount: number, id: string) {
    return updateOrderAmount(amount, id);
  }
}
