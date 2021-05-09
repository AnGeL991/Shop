import { FC } from "react";
import {
  PaymentComment,
  PaymentMethod,
  PaymentRule,
  PaymentRenderProduct,
} from "components/template";
import { Button } from "components/common";
import { usePaymentsLogic, useGetState } from "_hooks";
import { useCheckedLogic } from "./hooks/useCheckedLogic";
import { Link, Redirect } from "react-router-dom";

export const PaymentCard: FC = () => {
  const { error, handleSendOrder } = usePaymentsLogic();
  const {
    inputRules,
    inputComment,
    inputPayment,
    handleSetRegulation,
    handleSetComment,
  } = useCheckedLogic();
  const { payment } = useGetState();

  if (!payment.delivery.email) {
    return <Redirect to="/checkout/delivery" />;
  } else
    return (
      <section className="payment">
        <div className="payment__cart">
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
              <Link to="/checkout/delivery">
                back to the choice of delivery
              </Link>
            </Button>
            <Button className="buttons__btn" onClick={handleSendOrder}>
              Buy and pay
            </Button>
          </div>
        </div>
        <div className="payment__products">
          <PaymentRenderProduct title="summary" />
        </div>
      </section>
    );
};
