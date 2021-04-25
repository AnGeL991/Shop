import { FC, useMemo } from "react";
import { Button, Header } from "components/common";
import { PaymentRenderProduct } from "components/template";
import { Details } from "./details";
import { useGetState, usePaymentsLogic } from "_hooks";
import { useCheckedLogic } from "./hooks/useCheckedLogic";
import "./style/paymentSummary.scss";

interface IPaymentSummary {
  orderId: number | string;
}

export const PaymentSummary: FC<IPaymentSummary> = ({ orderId }) => {
  const { handlePayment, handleConfirmYourOrder } = usePaymentsLogic();
  const { inputPaymentAdress, handleSetRegulation } = useCheckedLogic();
  const {
    payment: { delivery, paymentStatus, deliveryCost,totalPayment },
  } = useGetState();
  const { cost } = deliveryCost;

  const submitButton =
    paymentStatus.method === "transfer" ? (
      <Button darkButton onClick={handlePayment}>
        Place your order
      </Button>
    ) : (
      <Button darkButton onClick={handleConfirmYourOrder}>
        Submit your order
      </Button>
    );

  const details = useMemo(
    () => (
      <Details
        {...{
          delivery,
          deliveryCost,
          inputChecked: inputPaymentAdress,
          handleChecked: handleSetRegulation,
        }}
      />
    ),
    [delivery, deliveryCost, inputPaymentAdress, handleSetRegulation]
  );

  return (
    <section className="paymentSummary">
      <div className="paymentSummary__products">
        <Header
          title={`Confirm & Pay`}
          className="checkout__header"
          style={{ fontWeight: 500, padding: "10px" }}
        />
        <PaymentRenderProduct fullWidth />
      </div>
      <div className="paymentSummary__details">
        {details}
        <div className="paymentSummary__summaryBox">
          <div className="paymentSummary__summaryDetail paymentSummary__summaryDetail--center">
            <span>Order: #{orderId}</span>
          </div>
          <div className="paymentSummary__summaryDetail">
            <span>Subtotal:</span> <span>${totalPayment.toFixed(2)} $</span>
          </div>
          <div className="paymentSummary__summaryDetail">
            <span>Taxes:</span>
            <span>{cost === 0 ? "free" : cost.toFixed(2)} $</span>
          </div>
          <div className="paymentSummary__summaryDetail">
            <strong>Total price:</strong>
            <strong>${(cost + totalPayment).toFixed(2)} $</strong>
          </div>
        </div>
        <div className="paymentSummary__buttonBox">{submitButton}</div>
      </div>
    </section>
  );
};
