import { FC, useMemo } from "react";
import {
  PaymentComment,
  PaymentMethod,
  PaymentRule,
  PaymentDetail,
} from "components/template";
import { Button } from "components/common";
import { usePaymentsLogic } from "_hooks";
import { Link, Redirect } from "react-router-dom";
import { Delivery, PaymentWay } from "store/payment";

const Details: FC<{ delivery: Delivery; deliveryCost: PaymentWay }> = ({
  delivery,
  deliveryCost,
}) =>
  delivery ? (
    <>
      <>
        <PaymentDetail detail={delivery} title="Rachunek dla:" to="delivery" />
        <PaymentDetail
          delivery={deliveryCost}
          detail={delivery}
          title="Sposób dostawy:"
        />
      </>
    </>
  ) : null;

export const PaymentCard: FC = () => {
  const {
    inputPayment,
    handleSetRegulation,
    inputRules,
    inputComment,
    handleSetComment,
    error,
    delivery,
    deliveryCost,
    handleSendOrder
  } = usePaymentsLogic();

  const details = useMemo(() => <Details {...{ delivery, deliveryCost }} />, [
    delivery,
    deliveryCost,
  ]);

  if (!delivery.email) {
    return <Redirect to="/checkout/delivery" />;
  } else
    return (
      <section className="payment">
        <PaymentMethod
          inputPayment={inputPayment}
          onChange={handleSetRegulation}
        />
        <PaymentComment
          inputComment={inputComment}
          onChange={handleSetComment}
        />
        <PaymentRule
          inputRules={inputRules}
          onChange={handleSetRegulation}
          error={error}
        />
        {details}
        <div className="buttons">
          <Button darkButton className="buttons__dark">
            <Link to="/checkout/delivery">Wróc do wyboru sposobu dostawy</Link>
          </Button>
          <Button className="buttons__btn" onClick={handleSendOrder}>Kupuje i płacę</Button>
        </div>
      </section>
    );
};
