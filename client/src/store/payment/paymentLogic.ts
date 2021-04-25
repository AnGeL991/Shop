import { AnyAction } from "redux";
import { PaymentState } from "./types";

export class PaymentReduxProcessor {
  static paymentLoad(state: PaymentState, action: AnyAction) {
    return { ...state, ...action.payload };
  }
  static addAdress(state: PaymentState, action: AnyAction) {
    return { ...state, delivery: action.payload, loading: false };
  }
  static addDeliveryAdress(state: PaymentState, action: AnyAction) {
    return { ...state };
  }
  static addPaymentStatus(state: PaymentState, action: AnyAction) {
    return {
      ...state,
      paymentStatus: { ...state.paymentStatus, ...action.payload },
    };
  }
  static addPaymentProduct(state: PaymentState, action: AnyAction) {
    return { ...state, products: [...action.payload] };
  }
  static addPaymentTotalPrice(state: PaymentState, action: AnyAction) {
    return { ...state, totalPayment: action.payload };
  }
  static addDeliveryOption(state: PaymentState, action: AnyAction) {
    return { ...state, deliveryCost: action.payload };
  }
  static acceptRegulation(state: PaymentState, action: AnyAction) {
    return { ...state, regulations: action.payload };
  }
  static addComment(state: PaymentState, action: AnyAction) {
    return { ...state, comment: action.payload };
  }
  static addOrderId(state: PaymentState, action: AnyAction) {
    return { ...state, orderId: action.payload };
  }
}
