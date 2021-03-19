import { Reducer } from "redux";
import { WishState, WishActionType } from "./types";

const initialState: WishState = {
  data: [],
  loading: false,
};

const {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_TO_WISH,
  ADD_PRODUCT_REQUEST,
  REMOVE_PRODUCT_FROM_WISH,
} = WishActionType;

const reducer: Reducer<WishState> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_TO_WISH:
      const some = state.data.some((el) => el._id === action.payload._id);
      if (some) {
        return state;
      }
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };
    case REMOVE_PRODUCT_FROM_WISH:
      return {
        ...state,
        data: state.data.filter((el) => el._id !== action.payload),
      };
    default:
      return state;
  }
};
export { reducer as WishReducer };
