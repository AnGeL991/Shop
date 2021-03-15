import { Reducer } from "redux";
import { AlertActionType } from "./types";

const { SUCCESS, ERROR, CLEAR } = AlertActionType;

const reducer: Reducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        type: "ALERT_SUCCESS",
        message: action.payload,
      };
    case ERROR:
      return {
        type: "ALERT_ERROR",
        message: action.message,
      };
    case CLEAR:
      return {};
    default:
      return state;
  }
};
export { reducer as alertReducer };
