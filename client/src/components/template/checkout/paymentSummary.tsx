import { FC, useMemo } from "react";
import { Button } from "components/common";
import { PaymentDetail } from "components/template";
import { Delivery, PaymentWay } from "store/payment";
import { usePaymentsLogic } from "_hooks";
import "./style/paymentSummary.scss";


const Details: FC<{ delivery: Delivery; deliveryCost: PaymentWay }> = ({
  delivery,
  deliveryCost,
}) =>
  delivery ? (
    <>
      <PaymentDetail email={delivery.email} title="Guest Checkout" />
      <PaymentDetail
        firstName={delivery.firstName}
        surName={delivery.surName}
        street={delivery.street}
        city={delivery.city}
        postCode={delivery.postCode}
        phone={delivery.phone}
        title="Shipping Information"
        to="delivery"
      />
      <PaymentDetail payment={deliveryCost} title="Payment" to="delivery" />
    </>
  ) : null;

export const PaymentSummary: FC= () => {
  const { delivery, deliveryCost,handlePayment,totalPrice } = usePaymentsLogic();
  const {cost} = deliveryCost
  const details = useMemo(() => <Details {...{ delivery, deliveryCost }} />, [
    delivery,
    deliveryCost,
  ]);

  return (
    <section className="paymentSummary">
      <div className="paymentSummary__details">
        {details}
        <div className="paymentSummary__summaryBox">
          <div className="paymentSummary__summaryDetail">
            <span>Subtotal:</span> <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="paymentSummary__summaryDetail">
            <span>Taxes:</span> <span>{cost === 0 ? "free" : cost.toFixed(2)}</span>
          </div>
          <div className="paymentSummary__summaryDetail">
            <strong>Total price:</strong> <strong>${(cost + totalPrice).toFixed(2)}</strong>
          </div>
        </div>
        {/* button z przekierowaniem do płatnosci */}
        <div className="paymentSummary__buttonBox">
          <Button darkButton onClick={handlePayment}>Place your order</Button>
        </div>
      </div>
    </section>
  );
};
