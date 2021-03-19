import { actions } from "store/inventory";
import { client } from "_api";
import { userActions } from "store/user";

export const initData = () => {
  return async (dispatch: Function) => {
    dispatch(actions.startLoading());
    try {
      let products = await client(`products`, null);
      dispatch(actions.doneFetchingAppData(products.result));
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
