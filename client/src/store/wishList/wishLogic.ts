import { AnyAction } from "redux";
import { WishState } from "./types";

export class WishReduxProcessor {
  static loadRequest(state: WishState, action: AnyAction) {
    return { ...state, loading: true };
  }
  static loadSuccess(state: WishState, action: AnyAction) {
    return { ...state, loading: false, data: [...action.payload] };
  }

  static loadFailure(state: WishState, action: AnyAction) {
    return { ...state, loading: false, error: action.paylad };
  }

  static request(state: WishState, action: AnyAction) {
    return {
      ...state,
      loading: true,
    };
  }
  static addProduct(state: WishState, action: AnyAction) {
    const some = state.data.some((el) => el._id === action.payload._id);
    if (some) {
      return { ...state, loading: false };
    }
    localStorage.setItem(
      "Wish",
      JSON.stringify([...state.data, action.payload])
    );
    return {
      ...state,
      data: [...state.data, action.payload],
      loading: false,
    };
  }
  static failure(state: WishState, action: AnyAction) {
    return {
      ...state,
      loading: false,
      errors: action.payload,
    };
  }
  static remove(state: WishState, action: AnyAction) {
    const wishList = state.data.filter((el) => el._id !== action.payload);
    localStorage.setItem("Wish", JSON.stringify([...wishList]));
    return {
      ...state,
      data: wishList,
    };
  }
}
