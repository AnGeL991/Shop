import { Reducer } from "redux";
import { PaymentState, PaymentActionType } from "./types";
import { PaymentReduxProcessor } from "./paymentLogic";

export const initialState: PaymentState = {
  id: "",
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
  totalPayment: 0,
  regulations: false,
  loading: false,
  products: [],
  errors: null,
  time: new Date(),
};

const {
  ADD_PAYMENT_ADDRESS,
  ADD_DELIVERY_ADDRESS,
  ADD_PAYMENT_STATUS,
  ADD_PRODUCT_PAYMENT,
  ADD_DELIVERY_OPTION,
  ACCEPT_REGULATION,
  ADD_COMMENT_PAYMENT,
  ADD_TOTAL_PRICE_PAYMENT,
  ADD_ORDER_ID,
  PAYMENT_LOAD,
} = PaymentActionType;

const reducer: Reducer<PaymentState> = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_LOAD: {
      return PaymentReduxProcessor.paymentLoad(state, action);
    }
    case ADD_PAYMENT_ADDRESS: {
      return PaymentReduxProcessor.addAdress(state, action);
    }
    case ADD_DELIVERY_ADDRESS: {
      return PaymentReduxProcessor.addDeliveryAdress(state, action);
    }
    case ADD_PAYMENT_STATUS: {
      return PaymentReduxProcessor.addPaymentStatus(state, action);
    }
    case ADD_PRODUCT_PAYMENT: {
      return PaymentReduxProcessor.addPaymentProduct(state, action);
    }
    case ADD_TOTAL_PRICE_PAYMENT: {
      return PaymentReduxProcessor.addPaymentTotalPrice(state, action);
    }
    case ADD_DELIVERY_OPTION: {
      return PaymentReduxProcessor.addDeliveryOption(state, action);
    }
    case ACCEPT_REGULATION: {
      return PaymentReduxProcessor.acceptRegulation(state, action);
    }
    case ADD_COMMENT_PAYMENT: {
      return PaymentReduxProcessor.addComment(state, action);
    }
    case ADD_ORDER_ID: {
      return PaymentReduxProcessor.addOrderId(state, action);
    }
    default:
      return state;
  }
};

export { reducer as PaymentReducer };
