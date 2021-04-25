import { Inventory } from "store/inventory";

export interface PaymentWay {
  methodPayment: string;
  cost: number;
}

export interface Delivery {
  email: string;
  firstName: string;
  surName: string;
  business?: string;
  nip?: number;
  street: string;
  postCode: string;
  city: string;
  phone: number;
  payment?: string;
  courier?: string;
  own?: string;
}

export interface IPaymentStatus {
  method?: string;
  paid?: boolean;
  id?: string;
}

export enum PaymentActionType {
  PAYMENT_LOAD = "PAYMENT_LOAD",
  ADD_PAYMENT_ADDRESS = "ADD_PAYMENT_ADDRESS",
  ADD_DELIVERY_ADDRESS = "ADD_DELIVERY_ADDRESS",
  ADD_PAYMENT_STATUS = "ADD_PAYMENT_STATUS",
  ADD_DELIVERY_OPTION = "ADD_DELIVERY_OPTION",
  ADD_PRODUCT_PAYMENT = "ADD_PRODUCT_PAYMENT",
  ADD_TOTAL_PRICE_PAYMENT = "ADD_TOTAL_PRICE_PAYMENT",
  ADD_COMMENT_PAYMENT = "ADD_COMMENT_PAYMENT",
  ADD_ORDER_ID = "ADD_ORDER_ID",
  ACCEPT_REGULATION = "ACCEPT_REGULATION ",
}

export interface PaymentState {
  id: string | number;
  paymentStatus: { method: string; paid: boolean; id?: string };
  delivery: Delivery;
  deliveryCost: { methodPayment: string; cost: number };
  comment: "";
  regulations: boolean;
  loading?: boolean;
  products: Inventory[];
  totalPayment: number;
  errors?: string | null;
}
