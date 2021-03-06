import { Reducer } from "redux";
import { CartActionTypes, CartState } from "./types";
import CartReduxProcesses from "./orderLogic";

export const initialState: CartState = {
  count: 0,
  items: [],
  totalPrice: 0,
  errors: undefined,
  loading: false,
};

const {
  START_LOAD_CART,
  END_LOAD_CART,
  ERROR_LOAD_CART,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  UPDATE_CART_AMOUNT,
  REMOVE_FROM_CART,
  CLEAR_CART,
} = CartActionTypes;

const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD_CART: {
      return CartReduxProcesses.startLoad(state, action);
    }
    case END_LOAD_CART: {
      return CartReduxProcesses.loadCart(state, action);
    }
    case ERROR_LOAD_CART: {
      return CartReduxProcesses.errorLoad(state, action);
    }
    case ADD_TO_CART_REQUEST: {
      return CartReduxProcesses.addRequest(state, action);
    }
    case ADD_TO_CART: {
      return CartReduxProcesses.addToCart(state, action);
    }
    case ADD_TO_CART_FAILURE: {
      return CartReduxProcesses.addFailure(state, action);
    }
    case UPDATE_CART_AMOUNT: {
      return CartReduxProcesses.updateCartAmount(state, action);
    }
    case REMOVE_FROM_CART:
      return CartReduxProcesses.removeCart(state, action);
    case CLEAR_CART:
      return CartReduxProcesses.cleanCart(state, action);
    default: {
      return state;
    }
  }
};
export { reducer as OrderReducer };
