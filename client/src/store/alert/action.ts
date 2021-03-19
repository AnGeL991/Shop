import { AlertActionType } from "./types";

const { SUCCESS, ERROR, CLEAR } = AlertActionType;

export function success(message: string) {
  return { type: SUCCESS, message };
}
export function error(message: string) {
  return { type: ERROR, message };
}
export function clear() {
  return { type: CLEAR };
}
