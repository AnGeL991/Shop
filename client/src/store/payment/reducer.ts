import { Reducer } from "redux";
import { PaymentState, PaymentActionType } from "./types";

export const initialState: PaymentState = {
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
} = PaymentActionType;

const reducer: Reducer<PaymentState> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAYMENT_ADDRESS: {
      return { ...state, delivery: action.payload, loading: false };
    }
    case ADD_DELIVERY_ADDRESS: {
      return { ...state };
    }
    case ADD_PAYMENT_STATUS: {
      return { ...state, paymentStatus: action.payload };
    }
    case ADD_PRODUCT_PAYMENT: {
      return { ...state, order: [...action.payload] };
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
    default:
      return state;
  }
};

export { reducer as PaymentReducer };
