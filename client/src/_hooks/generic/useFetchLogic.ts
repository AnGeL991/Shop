import { client } from "_api";
import { userActions } from "store/user";
import OrderProcess from "_services/cart.services";
import Payment from "_services/payment.service";
import { actions } from "store/inventory";

export const useFetchLogic = () => {
  const fetchProduct = async (dispatch: Function) => {
    const products = await client(`products`, null);
    if (products) {
      dispatch(actions.doneFetchingAppData(products.result));
    }
  };
  const fetchUser = async (dispatch: Function) => {
    const userToken = localStorage.getItem("Token");
    if (userToken) {
      const token = JSON.parse(userToken);
      dispatch(userActions.loadUser(token));
    }
  };
  const loadOrder = (dispatch: Function) => {
    const items = JSON.parse(localStorage.getItem("Cart") || "[]");
    dispatch(OrderProcess.loadOrderFromLocalStorage(items));
  };
  const loadPayment = (dispatch: Function) => {
    const payment = JSON.parse(localStorage.getItem("Payment") || "[]");

    dispatch(Payment.loadPayment(payment));
  };

  return { fetchProduct, fetchUser, loadOrder, loadPayment };
};
