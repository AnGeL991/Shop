import { FC } from "react";
import { FieldRadio } from "components/common";
import { paymentMethod } from "db";

export const PaymentMethod: FC = () => {
  const fieldPayment = paymentMethod.map((el) => (
    <div key={el.name} className="paymentMethod__box">
      <FieldRadio name={el.name}>
        <p className="paymentMethod__description">
          {el.description} {el.icon}
        </p>
      </FieldRadio>
    </div>
  ));

  return (
    <article className="paymentMethod">
      <h4 className="paymentMethod__title">Metoda płatności:</h4>
      {fieldPayment}
    </article>
  );
};
