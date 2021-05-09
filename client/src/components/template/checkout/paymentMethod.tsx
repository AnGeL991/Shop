import { FC, ChangeEvent, useMemo } from "react";
import { IPaymentInputs } from "components/interfaces";
import { FieldRadio } from "components/common";
import { paymentMethod } from "db";
import './style/paymentMethod.scss';

type PaymentMethodProps = {
  inputPayment: IPaymentInputs;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const PaymentMethod: FC<PaymentMethodProps> = ({
  inputPayment,
  onChange,
}) => {
  const Payment = useMemo(
    () =>
      paymentMethod.map((el) => (
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
      )),
    [onChange, inputPayment]
  );

  return (
    <article className="paymentMethod">
      <h4 className="paymentMethod__title">Payment method:</h4>
      {Payment}
    </article>
  );
};
