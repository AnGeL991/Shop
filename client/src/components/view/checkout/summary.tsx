import { FC } from "react";
import { ProgressList, PaymentCard } from "components/template";

export const Summary: FC = () => {

  return (
    <section >
      <ProgressList active={3} />
      <PaymentCard />
    </section>
  );
};
