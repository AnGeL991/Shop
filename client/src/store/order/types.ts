import { Inventory } from "store/inventory";

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
  deliveryCost: number;
  payment?: string;
  courier?: string;
  own?: string;
}

export interface Order {
  count: number;
  items: Inventory[];
  totalPrice: number;
  deliveryAdress?: Delivery;
}

export enum OrderActionTypes {
  ADD_TO_ORDER = "ADD_TO_ORDER",
  ADD_TO_ORDER_FAILURE = "ADD_TO_ORDER_FAILURE",
  ADD_TO_ORDER_REQUEST = "ADD_TO_ORDER_REQUEST",
  REMOVE_FROM_ORDER = "REMOVE_FROM_ORDER",
  UPDATE_ORDER_AMOUNT = "UPDATE_ORDER_AMOUNT",
  START_LOAD_ORDER = "START_LOAD_REQUEST",
  END_LOAD_ORDER = "END_LOAD_ORDER",
  ERROR_LOAD_ORDER = "ERROR_LOAD_ORDER",
  ADD_ADRESS_REQUEST = "ADD_ADRESS_REQUEST",
  ADD_ADRESS_SUCCESS = "ADD_ADRESS_SUCCESS",
  ADD_ADRESS_FAILURE = "ADD_ADRESS_FAILURE",
}

export interface OrderState {
  loading?: boolean;
  data: Order;
  errors?: string;
}
