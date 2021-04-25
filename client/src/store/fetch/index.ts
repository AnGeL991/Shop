import { actions } from "store/inventory";
import { client } from "_api";
import { userActions } from "store/user";
import OrderProcess from "_services/cart.services";
import Payment from "_services/payment.service";

export const initData = () => {
  return async (dispatch: Function) => {
    dispatch(actions.startLoading());
    try {
      let products = await client(`products`, null);
      dispatch(actions.doneFetchingAppData(products.result));
      const userToken = localStorage.getItem("Token");

      if (!userToken) {
        throw new Error("token not saved");
      }
      const token = JSON.parse(userToken);
      dispatch(userActions.loadUser(token));
      const items = JSON.parse(localStorage.getItem("Cart") || "[]");

      dispatch(OrderProcess.loadOrderFromLocalStorage(items));

      const payment = JSON.parse(localStorage.getItem("Payment") || "[]");

      dispatch(Payment.loadPayment(payment));
    } catch (e) {
      return dispatch(actions.errorFetchingAppData(e));
    }
  };
};
