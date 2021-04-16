import CartProcess from "_services/cart.services";
import { FactoryCallbackAction } from "../utils";

export const useChangeAmountLogic = (_id: string) => {
  const increment = FactoryCallbackAction(CartProcess.updateItem, [1, _id]);
  const decrement = FactoryCallbackAction(CartProcess.updateItem, [-1, _id]);
  const removeProduct = FactoryCallbackAction(CartProcess.deleteFromOrder, [
    _id,
  ]);

  return { increment, decrement, removeProduct };
};
