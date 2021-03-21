import { FC } from "react";
import { ProgressList, PaymentCard } from "components/template";

export const Payment: FC = () => {
  return (
    <section className="page">
      <ProgressList active={3} />
      <PaymentCard />
    </section>
  );
};
