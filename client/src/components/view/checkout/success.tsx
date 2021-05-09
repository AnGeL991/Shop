import { FC, useEffect } from "react";
import { Operation } from "components/template";
import { useSuccessOrder } from "_hooks";
import { MatchProps } from "components/interfaces";

export const Success: FC<MatchProps> = ({
  match: {
    params: { token },
  },
}) => {
  const { changeStatusPayment, handleConfirmOrder } = useSuccessOrder(token);
  
  useEffect(() => {
    let timeOut = setTimeout(() => handleConfirmOrder(), 1000);
    changeStatusPayment();
    return () => {
      clearTimeout(timeOut);
    };
  }, [handleConfirmOrder, changeStatusPayment]);

  return (
    <section>
      <Operation
        title="Payment successful"
        description="Thank you for your order."
        link="/"
        btnText="Back"
        onClick={handleConfirmOrder}
      ></Operation>
    </section>
  );
};
