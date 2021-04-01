import { FC } from "react";
import { Header } from "components/common";
import { PaymentRenderProduct, PaymentSummary } from "components/template";

export const Payment: FC = () => {
  return (
    <section className="page">
      <Header
        title={`Confirm & Pay`}
        className="checkout__header"
        style={{ fontWeight: 500, padding: "10px" }}
      />
      <PaymentRenderProduct />
      <PaymentSummary />
    </section>
  );
};
