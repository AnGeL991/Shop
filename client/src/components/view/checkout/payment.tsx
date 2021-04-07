import { FC } from "react";
import { PaymentSummary } from "components/template";
import { MatchProps } from "components/interfaces";

export const Payment: FC<MatchProps> = ({ match }) => {
  return (
    <section className="page">
      <PaymentSummary orderId={match.params.id} />
    </section>
  );
};
