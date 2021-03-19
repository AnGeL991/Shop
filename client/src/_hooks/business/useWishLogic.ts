import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "store";
import { wishAction } from "store/wishList";

export const useWishLogic = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((stata: ApplicationState) => stata.wish);
  const wishlistLenght = data.length;
  const removeWish = (id: string) => {
    dispatch(wishAction.removeProduct(id));
  };

  return { data, removeWish, wishlistLenght };
};
