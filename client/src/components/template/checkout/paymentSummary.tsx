import { FC, useMemo } from "react";
import { Button, Header } from "components/common";
import { PaymentRenderProduct } from "components/template";
import { Details } from "./details";
import { useGetState, usePaymentsLogic } from "_hooks";
import { useChecked } from "_hooks";
import "./style/paymentSummary.scss";

interface IPaymentSummary {
  orderId: number | string;
}

export const PaymentSummary: FC<IPaymentSummary> = ({ orderId }) => {
  const {
    handlePayment,
    handleConfirmYourOrder,
    totalOrderPayment,
  } = usePaymentsLogic();
  const { inputPaymentAdress, handleSetRegulation } = useChecked();
  const {
    payment: { delivery, paymentStatus, deliveryCost, totalPayment, discount },
  } = useGetState();
  const { cost } = deliveryCost;
  const totalPrice = totalOrderPayment(totalPayment, cost, discount);
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

  const discountBox =
    discount !== 0 ? (
      <div className="paymentSummary__summaryDetail">
        <strong>Discount:</strong>
        <strong>{discount} %</strong>
      </div>
    ) : null;

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
          {discountBox}
          <div className="paymentSummary__summaryDetail">
            <strong>Total price:</strong>
            <strong>{totalPrice.toFixed(2)} $</strong>
          </div>
        </div>
        <div className="paymentSummary__buttonBox">{submitButton}</div>
      </div>
    </section>
  );
};
