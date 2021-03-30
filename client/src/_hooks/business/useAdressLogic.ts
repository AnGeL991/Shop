import { useFormLogic, useChecked } from "_hooks";
import { privatePerson, delivery, business } from "db";
import { history } from "_helpers/history";
import { Delivery } from "store/payment";
import Payment from "_services/payment.service";
import { useEffect } from "react";
import { prepareDelivery } from "../utils";

export const useAdressLogic = () => {
  const { onSubmit } = useFormLogic();
  const {
    dataForm,
    handleSetData,
    inputDelivery,
    handleSetRegulation,
  } = useChecked();

  useEffect(() => {
    const deliveryOption = prepareDelivery(inputDelivery);
    onSubmit(Payment.setDeliveryCos, [deliveryOption]);
  }, [inputDelivery]);

  const submit = (delivery: Delivery) => {
    onSubmit(Payment.setAdressPayment, [delivery]);
    history.push("/checkout/payment");
  };

  const fieldsData = dataForm.private ? privatePerson : business;

  return {
    delivery,
    inputDelivery,
    handleSetRegulation,
    handleSetData,
    dataForm,
    fieldsData,
    submit,
  };
};
