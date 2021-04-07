import { Reducer } from "redux";
import { PaymentState, PaymentActionType } from "./types";

export const initialState: PaymentState = {
  orderId: "",
  paymentStatus: { method: "", paid: false },
  delivery: {
    email: "",
    firstName: "",
    surName: "",
    street: "",
    postCode: "",
    city: "",
    phone: 0,
    payment: "",
    courier: "",
    own: "",
  },
  deliveryCost: { methodPayment: "", cost: 0 },
  comment: "",
  regulations: false,
  loading: false,
  products: [],
  errors: null,
};

const {
  ADD_PAYMENT_ADDRESS,
  ADD_DELIVERY_ADDRESS,
  ADD_PAYMENT_STATUS,
  ADD_PRODUCT_PAYMENT,
  ADD_DELIVERY_OPTION,
  ACCEPT_REGULATION,
  ADD_COMMENT_PAYMENT,
  ADD_ORDER_ID,
  PAYMENT_LOAD,
} = PaymentActionType;

const reducer: Reducer<PaymentState> = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_LOAD: {
      return { ...state, ...action.payload };
    }
    case ADD_PAYMENT_ADDRESS: {
      return { ...state, delivery: action.payload, loading: false };
    }
    case ADD_DELIVERY_ADDRESS: {
      return { ...state };
    }
    case ADD_PAYMENT_STATUS: {
      return {
        ...state,
        paymentStatus: { ...state.paymentStatus, ...action.payload },
      };
    }
    case ADD_PRODUCT_PAYMENT: {
      return { ...state, products: [...action.payload] };
    }
    case ADD_DELIVERY_OPTION: {
      return { ...state, deliveryCost: action.payload };
    }
    case ACCEPT_REGULATION: {
      return { ...state, regulations: action.payload };
    }
    case ADD_COMMENT_PAYMENT: {
      return { ...state, comment: action.payload };
    }
    case ADD_ORDER_ID: {
      return { ...state, orderId: action.payload };
    }
    default:
      return state;
  }
};

export { reducer as PaymentReducer };
