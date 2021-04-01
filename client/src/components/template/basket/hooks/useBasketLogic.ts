import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useBasketLogic = (_id?: string) => {
  const { items, totalPrice, count } = useSelector(
    (store: ApplicationState) => store.order
  );
  const delivery = 49;

  return { count, items, totalPrice, delivery };
};
