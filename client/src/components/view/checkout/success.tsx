import { FC, useEffect } from "react";
import { Operation } from "components/template";
import { usePaymentsLogic } from "_hooks";
export const Success: FC = () => {
  const { handleConfirm } = usePaymentsLogic();

  useEffect(() => {
    let timeOut = setTimeout(() => handleConfirm(), 1000);
    return () => {
      clearTimeout(timeOut);
    };
  },[handleConfirm]);
  
  return (
    <section className="page">
      <Operation
        title="Payment successful"
        description="Thank you for your order."
        link="/"
        btnText="Back"
        onClick={handleConfirm}
      ></Operation>
    </section>
  );
};
