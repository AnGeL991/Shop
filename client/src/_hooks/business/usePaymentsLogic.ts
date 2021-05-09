/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFormLogic, useGetState } from "_hooks";
import { history } from "_helpers";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "_services/payment.service";
import { UserApiHandler } from "_services/user.service";
import { prepareTotalPrice, totalOrderPayment } from "_helpers/utils";
import { CartActions } from "store/cart";

const StripePK: string = process.env.REACT_APP_STRIPE_PK!;
const stripePromise = loadStripe(StripePK);

export const usePaymentsLogic = () => {
  const User = new UserApiHandler();
  const { onSubmit } = useFormLogic();
  const {
    cart: { items },
    payment,
    user: {
      token,
      data: { _id, accountStatus },
    },
  } = useGetState();

  const {
    deliveryCost,
    delivery,
    paymentStatus,
    id,
    regulations,
    products,
  } = payment;

  useEffect(() => {
    if (id !== "" || paymentStatus.id !== undefined) console.log("wchodze");
    localStorage.setItem("Payment", JSON.stringify(payment));
  }, [id, paymentStatus.id]);

  const [error, setError] = useState({ message: "" });

  function SetOrderToPayment() {
    const totalPrice = prepareTotalPrice(items);
    onSubmit(Payment.setTotalPricePayment, [totalPrice]);
    onSubmit(Payment.setOrderToPayment, [items]);
    if (accountStatus) {
      onSubmit(Payment.setDiscount, [accountStatus * 5]);
    }
  }

  const handleCheckout = async () => {
    if ((paymentStatus.method = "transfer")) {
      const session = await Payment.setPaymentIntent(
        delivery.email,
        products,
        deliveryCost.cost,
        _id
      );
      onSubmit(Payment.setPaymentStatus, [{ id: session.id }]);
    }
  };

  const handlePayment = async () => {
    const stripe = await stripePromise;
    if (stripe && paymentStatus.id) {
      const result = await stripe.redirectToCheckout({
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
      localStorage.removeItem("Cart");
      onSubmit(CartActions.clearCart, []);
      const result = await Payment.sendOrder(payment);
      if (token && result) {
        await User.addOrder(result._id, token);
      }
      onSubmit(Payment.setOrderId, [result.id]);
      history.push(`/checkout/payment/${result.id}`);
    }
  };

  const handleConfirmOrder = async () => {
    localStorage.setItem("Payment", "[]");
    await Payment.confirmOrder(`${payment.id}`);
  };
  const handleConfirmPayment = async () => {
    await Payment.confirmPayment(`${payment.id}`);
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
    handleConfirmOrder,
    handleConfirmPayment,
    totalOrderPayment,
  };
};
