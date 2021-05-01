import { useGetState } from "_hooks";
export const useBasketLogic = (_id?: string) => {
  const {
    cart: { items, totalPrice, count },
  } = useGetState();

  const delivery = 49;

  return { count, items, totalPrice, delivery };
};
