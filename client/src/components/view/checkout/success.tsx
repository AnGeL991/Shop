import { FC } from "react";
import { Operation } from "components/template";

export const Success: FC = () => {
  return (
    <section className="page">
      <Operation
        title="Payment successful"
        description="Thank you for your order."
        link="/"
        btnText="Back"
      ></Operation>
    </section>
  );
};
