import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import { useChecked, useFormLogic } from "_hooks";
import { history } from "_helpers/history";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "_services/payment.service";
import { client } from "_api";
import { preparePaymentMethod } from "_helpers/utils";

const StripePK: string = process.env.REACT_APP_STRIPE_PK!;

const stripePromise = loadStripe(StripePK);

export const usePaymentsLogic = () => {
  const {
    inputComment,
    inputDelivery,
    inputRules,
    inputPayment,
    error,
    handleSetComment,
    handleSetRegulation,
    setError,
  } = useChecked();

  const { onSubmit } = useFormLogic();

  const { user, order, payment } = useSelector(
    (state: ApplicationState) => state
  );
  const { isAuthenticated } = user;
  const { deliveryCost, delivery, paymentStatus, products } = payment;
  const { totalPrice } = order;

  useEffect(() => {
    onSubmit(Payment.setPaymentComment, [inputComment]);
  }, [inputComment]);

  useEffect(() => {
    if (inputRules.regulations && inputRules.personal)
      onSubmit(Payment.setRegulation, [
        inputRules.regulations && inputRules.personal,
      ]);
  }, [inputRules]);

  const handleCheckout = async () => {
    if (inputPayment.transfer) {
      const session = await Payment.setPaymentIntent(
        delivery.email,
        order.items,
        deliveryCost.cost
      );
      const method = preparePaymentMethod(inputPayment, session.id);
      onSubmit(Payment.setPaymentStatus, [method, session.id]);
    }
    if (inputPayment.delivery) {
      const method = preparePaymentMethod(inputPayment);
      onSubmit(Payment.setPaymentStatus, [method]);
    }
  };

  const handlePayment = async () => {
    const stripe = await stripePromise;
    if (stripe && paymentStatus.id) {
      const result = await stripe?.redirectToCheckout({
        sessionId: paymentStatus.id,
      });
      if (result?.error) {
        console.log(result.error.message);
      }
    }
  };

  const handleSendOrder = () => {
    if (!inputRules.personal && !inputRules.regulations) {
      setError({ message: "By kontynuować musisz zaakceptować zasady" });
    } else {
      payment.products = order.items;
      handleCheckout();
      client("/order", payment);
      history.push(`/checkout/payment`);
    }
  };

  return {
    isAuthenticated,
    inputComment,
    inputRules,
    inputPayment,
    inputDelivery,
    error,
    delivery,
    deliveryCost,
    products,
    totalPrice,
    handleSetComment,
    handleSetRegulation,
    handleSendOrder,
    handlePayment,
  };
};
