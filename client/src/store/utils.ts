import { Dispatch, Action } from "redux";

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
