import { FC } from "react";
import { ProgressList, PaymentCard } from "components/template";
import { usePaymentsLogic } from "_hooks";
import { Redirect } from "react-router";

export const Payment: FC = () => {
  const { deliveryAdress } = usePaymentsLogic();
  if (!deliveryAdress?.email) {
    return <Redirect to="/checkout/delivery" />;
  }
  return (
    <section className="page">
      <ProgressList active={3} />
      <PaymentCard />
    </section>
  );
};
