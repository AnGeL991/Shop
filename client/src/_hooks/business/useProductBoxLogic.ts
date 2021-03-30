import OrderProcess from "_services/order.services";
import { wishAction } from "store/wishList";
import { Inventory } from "store/inventory";
import { FactoryCallbackAction } from "../utils";
import { history } from "_helpers/history";

export const useProductBoxLogic = (item: Inventory) => {
  const addProductToOrder = FactoryCallbackAction(OrderProcess.addtoOrder, [
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
  let images = item.images.map((el, index) => ({ id: index, image: el }));
  images = [...images, { id: images.length + 1, image: item.image }];
  const handleRedirectToProduct = () => {
    history.push(`/shop/${item._id}`);
  };
  return {
    addProductToOrder,
    discountPrice,
    totalPrice,
    addProductToWish,
    handleRedirectToProduct,
    images,
  };
};
