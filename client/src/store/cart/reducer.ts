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
} = CartActionTypes;

const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD_CART: {
      return { ...state, loading: true, items: [] };
    }
    case END_LOAD_CART: {
      return CartReduxProcesses.loadOrders(state, action);
    }
    case ERROR_LOAD_CART: {
      return { ...state, loading: false, errors: action.payload };
    }
    case ADD_TO_CART_REQUEST: {
      return { ...state, loading: true };
    }
    case ADD_TO_CART: {
      return CartReduxProcesses.addToOrder(state, action);
    }
    case ADD_TO_CART_FAILURE: {
      return { ...state, errors: action.payload };
    }
    case UPDATE_CART_AMOUNT: {
      return CartReduxProcesses.updateOrderAmount(state, action);
    }
    case REMOVE_FROM_CART:
      return CartReduxProcesses.removeOrder(state, action);
    default: {
      return state;
    }
  }
};
export { reducer as OrderReducer };
