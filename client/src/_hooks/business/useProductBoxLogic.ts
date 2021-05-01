import CartProcess from "_services/cart.services";
import WishProcess from "_services/wish.services";
import { wishAction } from "store/wishList";
import { Inventory } from "store/inventory";
import { history } from "_helpers";
import { useGetState, useFormLogic, useModalLogic } from "_hooks";

export const useProductBoxLogic = (item: Inventory) => {
  const {
    cart: { loading },
    wish,
    alert: { message },
  } = useGetState();
  const { onSubmit } = useFormLogic();
  const { removeProduct } = wishAction;
  const { handleToggleModal, showModal } = useModalLogic();

  const addProductToOrder = () => {
    handleToggleModal();
    onSubmit(CartProcess.addtoOrder, [item]);
  };
  const addProductToWish = () => {
    handleToggleModal();
    onSubmit(WishProcess.AddProductToWish, [item]);
  };
  const removeProductFromWish = () => {
    handleToggleModal();
    onSubmit(removeProduct, [item._id]);
  };

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
    loading,
    wish,
    message,
    showModal,
    addProductToWish,
    addProductToOrder,
    handleRedirectToProduct,
    removeProductFromWish,
    handleToggleModal,
  };
};
