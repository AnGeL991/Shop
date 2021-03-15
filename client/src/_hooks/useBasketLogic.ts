import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useBasketLogic = () => {
  const { items, totalPrice, count } = useSelector(
    (store: ApplicationState) => store.order.data
  );

  const delivery = 49;

  return { count, items, totalPrice, delivery };
};
