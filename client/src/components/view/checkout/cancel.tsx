import { FC, useEffect } from "react";
import { Operation } from "components/template";

export const Cancel: FC = () => {
  
  useEffect(() => {
    localStorage.setItem("Payment", "[]");
  });

  return (
    <section className="page">
      <Operation
        title="Payment canceled"
        btnText="Back"
        link="/"
        description="
        We are sorry, but unfortunately payment hasn't been completed successfully"
      ></Operation>
    </section>
  );
};
