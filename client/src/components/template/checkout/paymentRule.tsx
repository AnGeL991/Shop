import { FC, ChangeEvent, useMemo } from "react";
import { FieldChecked, ReadMore } from "components/common";
import { paymentRule } from "db";

type PaymentRuleProps = {
  inputRules: { select: boolean; regulations: boolean; personal: boolean };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: { message: string };
};

export const PaymentRule: FC<PaymentRuleProps> = ({
  inputRules,
  onChange,
  error,
}) => {
  const rule = useMemo(
    () =>
      paymentRule.map((el) => (
        <FieldChecked
          key={el.name}
          name={el.name}
          type={el.type}
          checked={inputRules[el.name]}
          onChange={onChange}
          error={error}
        >
          {el.name !== "select" ? (
            <>
              <ReadMore title={el.name} className="checkedRead">
                <p>{el.description}</p>
              </ReadMore>
            </>
          ) : (
            <p className="paymentRule__title">{el.description}</p>
          )}
        </FieldChecked>
      )),
    [inputRules, onChange, error]
  );

  return <article className="paymentRule">{rule}</article>;
};
