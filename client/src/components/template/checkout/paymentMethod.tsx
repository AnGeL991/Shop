import { FC, ChangeEvent } from "react";
import { FieldRadio } from "components/common";
import { paymentMethod } from "db";

type PaymentMethodProps = {
  inputPayment: { transfer: boolean; masterpass: boolean; dotpay: boolean };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PaymentMethod: FC<PaymentMethodProps> = ({
  inputPayment,
  onChange,
}) => {
  const fieldPayment = paymentMethod.map((el) => (
    <div key={el.name} className="paymentMethod__box">
      <FieldRadio
        name={el.name}
        checked={inputPayment[el.name]}
        onChange={onChange}
      >
        <p className="paymentMethod__description">{el.description}</p>
        {el.icon ? (
          <img className="paymentMethod__img" src={el.icon} alt={el.name} />
        ) : null}
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
