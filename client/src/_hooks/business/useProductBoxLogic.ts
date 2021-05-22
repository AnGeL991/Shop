import CartProcess from "_services/cart.services";
import WishProcess from "_services/wish.services";
import { UserApiHandler } from "_services/user.service";
import { wishAction } from "store/wishList";
import { Inventory } from "store/inventory";
import { history } from "_helpers";
import { useGetState, useFormLogic } from "_hooks";

export const useProductBoxLogic = (item: Inventory) => {
  const User = new UserApiHandler();
  const {
    wish,
    alert: { message },
    user: {
      token,
      data: { wishId },
    },
  } = useGetState();
  const { onSubmit } = useFormLogic();

  const addProductToOrder = () => onSubmit(CartProcess.addtoOrder, [item]);

  const addProductToWish = async () => {
    onSubmit(WishProcess.AddProductToWish, [item]);
    if (token) {
      await User.addWishList(item._id, token);
    }
  };
  const removeProductFromWish = async () => {
    if (wishId && token) {
      const exist = wishId?.find((el) => el === item._id);
      if (exist) {
        await User.removeFromWishList(exist, token);
        onSubmit(wishAction.removeProduct, [item._id]);
      }
    }
    onSubmit(wishAction.removeProduct, [item._id]);
  };

  const discountPrice =
    item.discount > 0
      ? item.price - (item.price * item.discount) / 100
      : item.price;

  const totalPrice = discountPrice * item.amount;
  const arrayOfStars = item.comment.map((el) => el.star);

  const images = [item.image, ...item.images];

  const handleRedirectToProduct = () => {
    history.push(`/shop/${item._id}`);
  };

  return {
    discountPrice,
    totalPrice,
    images,
    arrayOfStars,
    wish,
    message,
    addProductToWish,
    addProductToOrder,
    handleRedirectToProduct,
    removeProductFromWish,
  };
};
