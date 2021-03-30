import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import { useChecked, useFormLogic } from "_hooks";
import { history } from "_helpers/history";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "_services/payment.service";
import { client } from "_api";
import { preparePaymentMethod } from "../utils";
const stripePromise = loadStripe(
  "pk_test_51IYXGBAoyhrXLJPmdtLQphHcSAglpKIllGkQ4VaY1eFrOr5mkhyjsUHXpK6jNuISVr7LwCNQpazH2O0GHSiRlUz600Roe4EONl"
);

export const usePaymentsLogic = () => {
  const {
    inputComment,
    inputDelivery,
    inputRules,
    inputPayment,
    handleSetComment,
    handleSetRegulation,
    error,
    setError,
  } = useChecked();

  const { onSubmit } = useFormLogic();

  const { user, order, payment } = useSelector(
    (state: ApplicationState) => state
  );
  const { isAuthenticated } = user;
  const { deliveryCost, delivery } = payment;

  useEffect(() => {
    onSubmit(Payment.setPaymentComment, [inputComment]);
  }, [inputComment]);

  useEffect(() => {
    if (inputRules.regulations && inputRules.personal)
      onSubmit(Payment.setRegulation, [
        inputRules.regulations && inputRules.personal,
      ]);
  }, [inputRules]);

  useEffect(() => {
    const method = preparePaymentMethod(inputPayment);
    onSubmit(Payment.setPaymentStatus, [method]);
  }, [inputPayment]);

  const handleCheckout = async () => {
    const session = await Payment.setPaymentIntent(
      delivery.email,
      order.order.items,
      deliveryCost.cost
    );
    const stripe = await stripePromise;
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.log(result.error.message);
    }
  };

  const handleSendOrder = () => {
    if (!inputRules.personal && !inputRules.regulations) {
      setError({ message: "By kontynuować musisz zaakceptować zasady" });
    } else if (inputPayment.transfer) {
      handleCheckout();
    } else {
      payment.products = order.order.items;
      client("/order", payment);
      history.push(`/success`);
    }
  };

  return {
    isAuthenticated,
    inputComment,
    inputRules,
    inputPayment,
    inputDelivery,
    handleSetComment,
    handleSetRegulation,
    handleSendOrder,
    error,
    delivery,
    deliveryCost,
  };
};
