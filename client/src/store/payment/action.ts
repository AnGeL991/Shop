import { selector } from "store/utils";
import {
  PaymentActionType,
  Delivery,
  PaymentWay,
  IPaymentStatus,
} from "./types";

const {
  ADD_DELIVERY_ADDRESS,
  ADD_PAYMENT_ADDRESS,
  ADD_PAYMENT_STATUS,
  ADD_PRODUCT_PAYMENT,
  ADD_DELIVERY_OPTION,
  ADD_COMMENT_PAYMENT,
  ACCEPT_REGULATION,
} = PaymentActionType;

export const addPaymentAdress = (data: Delivery) =>
  selector(ADD_PAYMENT_ADDRESS, data);
export const addPaymentStatus = (status: IPaymentStatus) =>
  selector(ADD_PAYMENT_STATUS, status);
export const addProductPayment = (productId: Array<string>) =>
  selector(ADD_PRODUCT_PAYMENT, productId);
export const addDeliveryOption = (paymentWay: PaymentWay) =>
  selector(ADD_DELIVERY_OPTION, paymentWay);
export const addDeliveryAdress = (data: Delivery) =>
  selector(ADD_DELIVERY_ADDRESS, data);
export const addPaymentComment = (comment: string) =>
  selector(ADD_COMMENT_PAYMENT, comment);
export const acceptPaymentRegulation = (accept: boolean) =>
  selector(ACCEPT_REGULATION, accept);
