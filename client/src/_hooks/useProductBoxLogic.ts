import { useCallback } from 'react';
import { addItemToOrder } from 'store/order';
import { Inventory } from 'store/inventory';
import { useDispatch } from 'react-redux';

export const useProductBoxLogic = (item: Inventory,) => {

  const dispatch = useDispatch();

  const AddProductToOrder = useCallback(
    () => {
      dispatch(addItemToOrder(item))
    }, [dispatch, item]);

  return { AddProductToOrder }
}
