import OrderProcess from "_services/order.services";
import { FactoryCallbackAction } from "../utils";

export const useChangeAmountLogic = (_id: string) => {
  const increment = FactoryCallbackAction(OrderProcess.updateItem, [1, _id]);
  const decrement = FactoryCallbackAction(OrderProcess.updateItem, [-1, _id]);
  const removeProduct = FactoryCallbackAction(OrderProcess.deleteFromOrder, [
    _id,
  ]);

  return { increment, decrement, removeProduct };
};
