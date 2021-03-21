import { OrderActions } from "store/order";
import { wishAction } from "store/wishList";
import { Inventory } from "store/inventory";
import { FactoryCallbackAction } from "../utils";
import { history } from "_helpers/history";

export const useProductBoxLogic = (item: Inventory) => {
  const addProductToOrder = FactoryCallbackAction(OrderActions.addItemToOrder, [
    item,
  ]);

  const addProductToWish = FactoryCallbackAction(wishAction.AddProductToWish, [
    item,
  ]);

  const discountPrice =
    item.discount > 0
      ? item.price - (item.price * item.discount) / 100
      : item.price;

  const totalPrice = discountPrice * item.amount;

  const handleRedirectToProduct = () => {
    history.push(`/shop/${item._id}`);
  };
  return {
    addProductToOrder,
    discountPrice,
    totalPrice,
    addProductToWish,
    handleRedirectToProduct,
  };
};
