/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFormLogic, useGetState } from "_hooks";
import { history } from "_helpers";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "_services/payment.service";

const StripePK: string = process.env.REACT_APP_STRIPE_PK!;
const stripePromise = loadStripe(StripePK);

export const usePaymentsLogic = () => {
  const { onSubmit } = useFormLogic();
  const { order, payment } = useGetState();

  const {
    deliveryCost,
    delivery,
    paymentStatus,
    orderId,
    regulations,
  } = payment;

  useEffect(() => {
    if (orderId !== "" || paymentStatus.id)
      localStorage.setItem("Payment", JSON.stringify(payment));
  }, [orderId, paymentStatus]);

  const [error, setError] = useState({ message: "" });

  function SetOrderToPayment() {
    onSubmit(Payment.setOrderToPayment, [order.items]);
  }

  const handleCheckout = async () => {
    if ((paymentStatus.method = "transfer")) {
      const session = await Payment.setPaymentIntent(
        delivery.email,
        order.items,
        deliveryCost.cost
      );
      onSubmit(Payment.setPaymentStatus, [{ id: session.id }]);
      return session.id;
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

  const handleSendOrder = async () => {
    if (!regulations) {
      setError({ message: "By kontynuować musisz zaakceptować zasady" });
    } else {
      handleCheckout();
      const result = await Payment.sendOrder(payment);
      onSubmit(Payment.setOrderId, [result.id]);
      history.push(`/checkout/payment/${result.id}`);
    }
  };

  const handleConfirm = async () => {
    localStorage.setItem("Payment", "[]");
    await Payment.confirmOrder(`${payment.orderId}`);
  };

  const handleConfirmYourOrder = () => {
    history.push(`/success/${orderId}`);
  };

  return {
    error,
    setError,
    handleSendOrder,
    handlePayment,
    SetOrderToPayment,
    handleConfirmYourOrder,
    handleConfirm,
  };
};
