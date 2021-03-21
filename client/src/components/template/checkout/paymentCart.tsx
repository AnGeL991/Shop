import { FC } from "react";
import {
  PaymentComment,
  PaymentMethod,
  PaymentRule,
  PaymentDetail,
} from "components/template";
import { Button } from "components/common";

export const PaymentCard: FC = () => {
  return (
    <section className="payment">
      <PaymentMethod />
      <PaymentComment />
      <PaymentRule />
      <PaymentDetail
        title="Rachunek dla:"
        firstName="Adrian"
        surName="Markuszewski"
        street="Rydzyn Szlachecki 7"
        city="Strzegowo"
        postCode="064445"
        phone={539924732}
      />
      <PaymentDetail
        delivery="Kurier"
        title="Sposób dostawy:"
        firstName="Adrian"
        surName="Markuszewski"
        street="Rydzyn Szlachecki 7"
        city="Strzegowo"
        postCode="064445"
        phone={539924732}
      />
      <div className="buttons">
        <Button darkButton className="buttons__dark">
          Wróc do wyboru sposobu dostawy
        </Button>
        <Button className="buttons__btn">Kupuje i płacę</Button>
      </div>
    </section>
  );
};
