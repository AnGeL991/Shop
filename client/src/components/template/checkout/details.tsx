import { FC, ChangeEvent } from "react";
import { PaymentDetail } from "components/template";
import { Delivery, PaymentWay } from "store/payment";

interface IDetails {
  delivery: Delivery;
  deliveryCost: PaymentWay;
  inputChecked: boolean;
  handleChecked: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Details: FC<IDetails> = ({
  delivery,
  deliveryCost,
  handleChecked,
  inputChecked,
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
      <PaymentDetail
        payment={deliveryCost}
        title="Payment"
        to="delivery"
        inputChecked={inputChecked}
        handleChecked={handleChecked}
      />
    </>
  ) : null;
