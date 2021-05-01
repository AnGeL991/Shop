import { Reducer } from "redux";
import { WishState, WishActionType } from "./types";
import { WishReduxProcessor } from "./wishLogic";

const initialState: WishState = {
  data: [],
  loading: false,
};

const {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_TO_WISH,
  ADD_PRODUCT_REQUEST,
  REMOVE_PRODUCT_FROM_WISH,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
} = WishActionType;

const reducer: Reducer<WishState> = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQUEST: {
      return WishReduxProcessor.loadRequest(state, action);
    }
    case LOAD_SUCCESS: {
      return WishReduxProcessor.loadSuccess(state, action);
    }
    case LOAD_FAILURE: {
      return WishReduxProcessor.loadFailure(state, action);
    }
    case ADD_PRODUCT_REQUEST:
      return WishReduxProcessor.request(state, action);
    case ADD_PRODUCT_TO_WISH:
      return WishReduxProcessor.addProduct(state, action);
    case ADD_PRODUCT_FAILURE:
      return WishReduxProcessor.failure(state, action);
    case REMOVE_PRODUCT_FROM_WISH:
      return WishReduxProcessor.remove(state, action);
    default:
      return state;
  }
};
export { reducer as WishReducer };
