/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { ProgressList, AdressForm } from "components/template";
import { useGetState, usePaymentsLogic } from "_hooks";
import { Redirect } from "react-router-dom";

export const Delivery: FC = () => {
  const { SetOrderToPayment } = usePaymentsLogic();
  const { cart:{count} } = useGetState();

  useEffect(() => {
    SetOrderToPayment();
  }, []);

  if (count === 0) return <Redirect to="/order" />;

  return (
    <section >
      <ProgressList active={2} />
      <AdressForm />
    </section>
  );
};
