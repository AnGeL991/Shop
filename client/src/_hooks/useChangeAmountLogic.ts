import { actions } from "store/order";
import { FactoryCallbackAction } from "./utils";

export const useChangeAmountLogic = (_id: string) => {
  const increment = FactoryCallbackAction(actions.updateOrderAmount, [1, _id]);
  const decrement = FactoryCallbackAction(actions.updateOrderAmount, [-1, _id]);
  const removeProduct = FactoryCallbackAction(actions.deleteOrderProduct, [
    _id,
  ]);

  return { increment, decrement, removeProduct };
};
