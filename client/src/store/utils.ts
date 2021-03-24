import { Dispatch, Action } from "redux";
import { history } from "_helpers/history";
export const selector = (type: any, payload?: any) => ({
  type,
  payload,
});

export const dispatchSelector = (
  actionRequest: any,
  actionSuccess: any,
  item: any,
  ErrorAction: any
) => {
  return (dispatch: Dispatch): Action => {
    dispatch(actionRequest());
    try {
      return dispatch(actionSuccess(...item));
    } catch (e) {
      return dispatch(ErrorAction(e.message));
    }
  };
};

export const dispatchAuthSelector = (
  action: any,
  props: any,
  alertAction: Function,
  message: string,
  push?: boolean
) => {
  return async (dispatch: Function) => {
    await action(...props).then(() => {
      dispatch(alertAction(message));
      push && history.push("/");
    });
  };
};
