import CartProcess from "_services/cart.services";
import { wishAction } from "store/wishList";
import { Inventory } from "store/inventory";
import { FactoryCallbackAction } from "../utils";
import { history } from "_helpers";

export const useProductBoxLogic = (item: Inventory) => {
  const addProductToOrder = FactoryCallbackAction(CartProcess.addtoOrder, [
    item,
  ]);

  const addProductToWish = FactoryCallbackAction(wishAction.AddProductToWish, [
    item,
  ]);

  const removeProductFromWish = FactoryCallbackAction(
    wishAction.removeProduct,
    [item._id]
  );

  const discountPrice =
    item.discount > 0
      ? item.price - (item.price * item.discount) / 100
      : item.price;

  const totalPrice = discountPrice * item.amount;
  const arrayOfStars = item.comment.map((el) => el.star);

  let images = item.images.map((el, index) => ({ id: index, image: el }));
  images = [...images, { id: images.length + 1, image: item.image }];

  const handleRedirectToProduct = () => {
    history.push(`/shop/${item._id}`);
  };

  return {
    discountPrice,
    totalPrice,
    images,
    arrayOfStars,
    addProductToWish,
    addProductToOrder,
    handleRedirectToProduct,
    removeProductFromWish,
  };
};
