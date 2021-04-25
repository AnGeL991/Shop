/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFormLogic, useGetState } from "_hooks";
import { history } from "_helpers";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "_services/payment.service";
import { UserApiHandler } from "_services/user.service";
import { prepareTotalPrice } from "_helpers/utils";

const StripePK: string = process.env.REACT_APP_STRIPE_PK!;
const stripePromise = loadStripe(StripePK);

export const usePaymentsLogic = () => {
  const User = new UserApiHandler();
  const { onSubmit } = useFormLogic();
  const {
    order: { items },
    payment,
    user: { token },
  } = useGetState();

  const { deliveryCost, delivery, paymentStatus, id, regulations } = payment;

  useEffect(() => {
    if (id !== "" || paymentStatus.id)
      localStorage.setItem("Payment", JSON.stringify(payment));
  }, [id, paymentStatus]);

  const [error, setError] = useState({ message: "" });

  function SetOrderToPayment() {
    const totalPrice = prepareTotalPrice(items);
    onSubmit(Payment.setTotalPricePayment, [totalPrice]);
    onSubmit(Payment.setOrderToPayment, [items]);
  }

  const handleCheckout = async () => {
    if ((paymentStatus.method = "transfer")) {
      const session = await Payment.setPaymentIntent(
        delivery.email,
        items,
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
      if (token && result) {
        await User.addOrder(token, result._id);
      }
      onSubmit(Payment.setOrderId, [result.id]);
      history.push(`/checkout/payment/${result.id}`);
    }
  };

  const handleConfirm = async () => {
    localStorage.setItem("Payment", "[]");
    await Payment.confirmOrder(`${payment.id}`);
  };

  const handleConfirmYourOrder = () => {
    history.push(`/success/${id}`);
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
