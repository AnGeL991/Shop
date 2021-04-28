import { Inventory } from "store/inventory";
import { selector } from "store/utils";
import {
  PaymentActionType,
  Delivery,
  PaymentWay,
  IPaymentStatus,
  PaymentState,
} from "./types";

const {
  ADD_DELIVERY_ADDRESS,
  ADD_PAYMENT_ADDRESS,
  ADD_PAYMENT_STATUS,
  ADD_PRODUCT_PAYMENT,
  ADD_TOTAL_PRICE_PAYMENT,
  ADD_DELIVERY_OPTION,
  ADD_COMMENT_PAYMENT,
  ACCEPT_REGULATION,
  ADD_ORDER_ID,
  PAYMENT_LOAD,
  ADD_DISCOUNT,
} = PaymentActionType;

export const addPaymentAdress = (data: Delivery) =>
  selector(ADD_PAYMENT_ADDRESS, data);
export const addPaymentStatus = (status: IPaymentStatus) =>
  selector(ADD_PAYMENT_STATUS, status);
export const addProductPayment = (productId: Inventory[]) =>
  selector(ADD_PRODUCT_PAYMENT, productId);
export const addTotalPricePayment = (totalPrice: number) =>
  selector(ADD_TOTAL_PRICE_PAYMENT, totalPrice);
export const addDeliveryOption = (paymentWay: PaymentWay) =>
  selector(ADD_DELIVERY_OPTION, paymentWay);
export const addDeliveryAdress = (data: Delivery) =>
  selector(ADD_DELIVERY_ADDRESS, data);
export const addPaymentComment = (comment: string) =>
  selector(ADD_COMMENT_PAYMENT, comment);
export const acceptPaymentRegulation = (accept: boolean) =>
  selector(ACCEPT_REGULATION, accept);
export const addOrderId = (orderId: string | number) =>
  selector(ADD_ORDER_ID, orderId);
export const paymentLoad = (state: PaymentState) =>
  selector(PAYMENT_LOAD, state);
export const addDiscount = (discount: number) =>
  selector(ADD_DISCOUNT, discount);
