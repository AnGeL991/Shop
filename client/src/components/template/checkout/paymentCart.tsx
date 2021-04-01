import { FC } from "react";
import {
  PaymentComment,
  PaymentMethod,
  PaymentRule,
} from "components/template";
import { Button } from "components/common";
import { usePaymentsLogic } from "_hooks";
import { Link, Redirect } from "react-router-dom";

export const PaymentCard: FC = () => {
  const {
    inputPayment,
    handleSetRegulation,
    inputRules,
    inputComment,
    handleSetComment,
    error,
    delivery,
    handleSendOrder,
  } = usePaymentsLogic();

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
        <div className="buttons">
          <Button darkButton className="buttons__dark">
            <Link to="/checkout/delivery">Wróc do wyboru sposobu dostawy</Link>
          </Button>
          <Button className="buttons__btn" onClick={handleSendOrder}>
            Kupuje i płacę
          </Button>
        </div>
      </section>
    );
};
