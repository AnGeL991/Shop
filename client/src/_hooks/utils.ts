import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  deliveryCos,
  IPaymentInputs,
  IDeliveryOption,
} from "components/interfaces";

export const FactoryCallbackAction = (action: any, params: any) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(action(...params));
  }, [dispatch, params, action]);
};

export const prepareDelivery = (inputDelivery: IDeliveryOption) => {
  const { payment, courier } = inputDelivery;
  if (payment) {
    return { methodPayment: "prepayment courier", cost: deliveryCos.payment };
  } else if (courier) {
    return { methodPayment: "courier", cost: deliveryCos.courier };
  } else return { methodPayment: "own", cost: 0 };
};
export const preparePaymentMethod = (option: IPaymentInputs) => {
  if (option.transfer) {
    return { method: "transfer", paid: false };
  } else return { method: "delivery", paid: false };
};
