import { FC } from "react";
import { FieldChecked, ReadMore } from "components/common";

import { paymentRule } from "db";

export const PaymentRule: FC = () => {
  const rule = paymentRule.map((el) => (
    <FieldChecked key={el.name} name={el.name} type={el.type}>
      {el.name !== "approve" ? (
        <ReadMore title={el.name} className="checkedRead">
          <p>{el.description}</p>
        </ReadMore>
      ) : (
       <p className='paymentRule__title'>{el.description}</p> 
      )}
    </FieldChecked>
  ));

  return <article className="paymentRule">{rule}</article>;
};
