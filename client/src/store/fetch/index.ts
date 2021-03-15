import { Dispatch } from "redux";
import { actions } from "store/inventory";
import { client } from "_api";
import { userActions } from "store/user";
import { alertAction } from "store/alert";
import { UserActionType } from "store/user";

export const initData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(actions.startLoading());
    try {
      let products = await client(`products`, null);
      dispatch(actions.doneFetchingAppData(products.result));
      const token = localStorage.getItem("Token");
      if (token) {
        client("users/validate-Token", null, token).then(
          (user) => {
            dispatch(
              userActions.success(UserActionType.USER_LOADED, user?.result)
            );
          },
          (error) => {
            dispatch(alertAction.error(error.message));
          }
        );
      }
    } catch (e) {
      return dispatch(actions.errorFetchingAppData(e));
    }
  };
};
