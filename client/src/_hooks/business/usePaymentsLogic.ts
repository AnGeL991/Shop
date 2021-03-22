import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import { Inventory } from "store/inventory";
import { Delivery } from "store/order";
import { useCheckedRule } from "_hooks";

interface FinalPayment {
  data: Inventory[];
  adress?: Delivery;
  paymentAdress?: Delivery;
  payment?: string;
  comment: string;
  regulations: boolean;
}

export const usePaymentsLogic = () => {
  const {
    inputComment,
    inputDelivery,
    inputRules,
    inputPayment,
    handleSetComment,
    handleSetRegulation,
  } = useCheckedRule();

  const { user, order } = useSelector((state: ApplicationState) => state);
  const [error, setError] = useState({ message: "" });
  const { items, deliveryAdress } = order.data;
  const { isAuthenticated } = user;

  const [finalPayment, setFinalPayment] = useState<FinalPayment>({
    data: [...items],
    adress: deliveryAdress ? deliveryAdress : undefined,
    payment: "",
    comment: inputComment,
    regulations: false,
  });

  useEffect(() => {
    setFinalPayment((prev) => ({
      ...prev,
      comment: inputComment,
      regulations: inputRules.personal && inputRules.regulations ? true : false,
      payment: inputPayment.dotpay
        ? "dotpay"
        : null || inputPayment.masterpass
        ? "masterpass"
        : null || inputPayment.transfer
        ? "transfer"
        : "",
    }));
  }, [inputRules, inputComment, inputPayment]);
  const { data, regulations, adress, payment } = finalPayment;

  const HandleSendOrder = () => {
    if (regulations === false) {
      setError({ message: "By kontynuować musisz zaakceptować zasady" });
    }
    if (data.length >= 1 && regulations && adress && payment) {
      setError({ message: "" });
      console.log(finalPayment);
    }
  };
  return {
    isAuthenticated,
    deliveryAdress,
    finalPayment,
    inputComment,
    inputRules,
    inputPayment,
    inputDelivery,
    handleSetComment,
    handleSetRegulation,
    HandleSendOrder,
    error,
  };
};
