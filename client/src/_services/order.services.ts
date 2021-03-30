import { Inventory } from "store/inventory";
import { OrderActions } from "store/order";

const {
  addOrderRequest,
  addOrderFailure,
  addOrderSuccess,
  deleteOrderProduct,
  updateOrderAmount,
} = OrderActions;

export default class OrderProcess {
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
