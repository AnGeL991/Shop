import { Reducer } from "redux";
import { OrderActionTypes, OrderState } from "./types";
import OrderReduxProcesses from "./orderLogic";

export const initialState: OrderState = {
  order: {
    count: 0,
    items: [],
    totalPrice: 0,
  },
  errors: undefined,
  loading: false,
};

const {
  START_LOAD_ORDER,
  END_LOAD_ORDER,
  ERROR_LOAD_ORDER,
  ADD_TO_ORDER_REQUEST,
  ADD_TO_ORDER,
  ADD_TO_ORDER_FAILURE,
  UPDATE_ORDER_AMOUNT,
  REMOVE_FROM_ORDER,
} = OrderActionTypes;

const reducer: Reducer<OrderState> = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD_ORDER: {
      return { ...state, loading: true };
    }
    case END_LOAD_ORDER: {
      return { ...state, loading: false, order: { ...action.payload } };
    }
    case ERROR_LOAD_ORDER: {
      return { ...state, loading: false, errors: action.payload };
    }
    case ADD_TO_ORDER_REQUEST: {
      return { ...state, loading: true };
    }
    case ADD_TO_ORDER: {
      return OrderReduxProcesses.addToOrder(state, action);
    }
    case ADD_TO_ORDER_FAILURE: {
      return { ...state, errors: action.payload };
    }
    case UPDATE_ORDER_AMOUNT: {
      return OrderReduxProcesses.updateOrderAmount(state, action);
    }
    case REMOVE_FROM_ORDER:
      return OrderReduxProcesses.removeOrder(state, action);
    default: {
      return state;
    }
  }
};
export { reducer as OrderReducer };
