import { AlertActionType } from "./types";

export const alertAction = {
  success,
  error,
  clear,
};

const { SUCCESS, ERROR, CLEAR } = AlertActionType;

function success(message: string) {
  return { type: SUCCESS, message };
}
function error(message: string) {
  return { type: ERROR, message };
}
function clear() {
  return { type: CLEAR };
}
