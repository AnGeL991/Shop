import { FC } from "react";
import {
  PaymentComment,
  PaymentMethod,
  PaymentRule,
  PaymentDetail,
} from "components/template";
import { Button } from "components/common";
import { usePaymentsLogic } from "_hooks";

export const PaymentCard: FC = () => {
  const {
    inputPayment,
    handleSetRegulation,
    inputRules,
    deliveryAdress,
    inputComment,
    handleSetComment,
    HandleSendOrder,
    error
  } = usePaymentsLogic();

  const details = deliveryAdress ? (
    <>
      <PaymentDetail
        detail={deliveryAdress}
        title="Rachunek dla:"
        to="delivery"
      />
      <PaymentDetail delivery detail={deliveryAdress} title="Sposób dostawy:" />
    </>
  ) : null;

  return (
    <section className="payment">
      <PaymentMethod
        inputPayment={inputPayment}
        onChange={handleSetRegulation}
      />
      <PaymentComment inputComment={inputComment} onChange={handleSetComment} />
      <PaymentRule inputRules={inputRules} onChange={handleSetRegulation} error={error} />
      {details}
      <div className="buttons">
        <Button darkButton className="buttons__dark">
          Wróc do wyboru sposobu dostawy
        </Button>
        <Button className="buttons__btn" onClick={HandleSendOrder}>
          Kupuje i płacę
        </Button>
      </div>
    </section>
  );
};
