import { actions } from "store/order";
import { Inventory } from "store/inventory";
import { FactoryCallbackAction } from "./utils";

export const useProductBoxLogic = (item: Inventory) => {
  const AddProductToOrder = FactoryCallbackAction(actions.addItemToOrder, [
    item,
  ]);

  const discountPrice =
    item.discount > 0 ? item.price - (item.price * item.discount) / 100 : null;

  return { AddProductToOrder, discountPrice };
};
