/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { preparePaymentMethod } from "_helpers";
import { useChecked, useFormLogic } from "_hooks";
import Payment from "_services/payment.service";

export const useCheckedLogic = () => {
  const { onSubmit } = useFormLogic();
  const {
    inputRules,
    inputComment,
    inputPayment,
    inputPaymentAdress,
    handleSetComment,
    handleSetRegulation,
  } = useChecked();

  useEffect(() => {
    const method = preparePaymentMethod(inputPayment);
    onSubmit(Payment.setPaymentStatus, [method]);
  }, [inputPayment]);

  useEffect(() => {
    if (inputRules.regulations && inputRules.personal)
      onSubmit(Payment.setRegulation, [
        inputRules.regulations && inputRules.personal,
      ]);
  }, [inputRules]);

  useEffect(() => {
    onSubmit(Payment.setPaymentComment, [inputComment]);
  }, [inputComment]);

  return {
    inputRules,
    inputComment,
    inputPayment,
    inputPaymentAdress,
    handleSetComment,
    handleSetRegulation,
  };
};
