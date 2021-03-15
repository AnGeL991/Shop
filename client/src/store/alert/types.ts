export enum AlertActionType {
  SUCCESS = "ALERT_SUCCESS",
  ERROR = "ALERT_ERROR",
  CLEAR = "ALERT_CLEAR",
}
export interface alertState {
  type: string;
  message: string;
}
