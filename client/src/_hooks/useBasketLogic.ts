import { useSelector } from 'react-redux';
import { ApplicationState } from 'store/index';


export const useBasketLogic = () => {
  const { items } = useSelector((store: ApplicationState) => store.order.data)

  const delivery = 49;

  const price = items.reduce((total, item) => {
    return total + (item.price * (item.amount ? item.amount : 1));
  }, 0);

  const amount = items.reduce((total, item) => {
    return total + (item.amount ? item.amount : 1)
  }, 0)

  return { amount, items, price,delivery }

}