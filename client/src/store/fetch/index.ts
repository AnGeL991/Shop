import { actions } from "store/inventory";
import { client } from "_api";
import { userActions } from "store/user";
import OrderProcess from "_services/order.services";

export const initData = () => {
  return async (dispatch: Function) => {
    dispatch(actions.startLoading());
    try {
      let products = await client(`products`, null);
      dispatch(actions.doneFetchingAppData(products.result));
      const items = JSON.parse(localStorage.getItem("Order") || "[]");
      dispatch(OrderProcess.loadOrderFromLocalStorage(items));
      const token = localStorage.getItem("Token");
      if (!token) {
        throw new Error("token not saved");
      }
      dispatch(userActions.loadUser(JSON.parse(token)));
    } catch (e) {
      return dispatch(actions.errorFetchingAppData(e));
    }
  };
};
