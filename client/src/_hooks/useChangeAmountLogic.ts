import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'store/order';

export const useChangeAmountLogic = (_id: string) => {
  const dispatch = useDispatch();

  const increment = useCallback(
    () => {
      dispatch(actions.updateOrderAmount(1, _id))
    }, [dispatch, _id]);

  const decrement = useCallback(
    () => {
      dispatch(actions.updateOrderAmount(-1, _id))
    }, [dispatch, _id]);

  const removeProduct = useCallback(
    () => {
      console.log(_id)
      dispatch(actions.deleteOrderProduct(_id))
    }, [dispatch, _id]
  )

  return { increment, decrement, removeProduct }
}