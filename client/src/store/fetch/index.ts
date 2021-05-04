import { actions } from "store/inventory";
import { useFetchLogic } from "_hooks";

export const initData = () => {
  return async (dispatch: Function) => {
    const {
      fetchProduct,
      fetchUser,
      loadOrder,
      loadPayment,
      loadWish,
    } = useFetchLogic();
    dispatch(actions.startLoading());
    try {
      loadOrder(dispatch);
      loadWish(dispatch);
      loadPayment(dispatch);
      await fetchProduct(dispatch);
      await fetchUser(dispatch);
    } catch (e) {
      return dispatch(actions.errorFetchingAppData(e));
    }
  };
};
