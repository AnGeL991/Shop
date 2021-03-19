import { OrderActions } from "store/order";
import { FactoryCallbackAction } from "../utils";

export const useChangeAmountLogic = (_id: string) => {
  const increment = FactoryCallbackAction(OrderActions.updateOrderAmount, [
    1,
    _id,
  ]);
  const decrement = FactoryCallbackAction(OrderActions.updateOrderAmount, [
    -1,
    _id,
  ]);
  const removeProduct = FactoryCallbackAction(OrderActions.deleteOrderProduct, [
    _id,
  ]);

  return { increment, decrement, removeProduct };
};
