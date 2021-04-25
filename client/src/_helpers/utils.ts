import { ChangeEvent, useState } from "react";
import {
  deliveryCost,
  IPaymentInputs,
  IDeliveryOption,
  Inventory,
} from "components/interfaces";

export const usePasswordStrength = (e: ChangeEvent<HTMLInputElement>) => {
  const [status, setStatus] = useState("");

  const { value, max } = cancelateComplexity(e.target.value);

  switch (value) {
    case 1:
      setStatus("Słabe hasło");
      return { status, value, max };
    case 3:
      setStatus("Silne hasło");
      return { status, value, max };
    case 5:
      setStatus("Bardzo silne hasło");
      return { status, value, max };
    default:
      setStatus("no password");
      return { status, value, max };
  }
};

export function cancelateComplexity(password: string) {
  let complexity = 0;
  // .reduce

  let regExps = [/[a-z]/, /[A-Z]/, /[0-9]/, /.{6}/, /[!-//:-@[-`{-}ÿ]/];

  regExps.forEach((regexp) => {
    if (regexp.test(password)) {
      complexity++;
    }
  });
  return {
    value: complexity,
    max: regExps.length,
  };
}

export const prepareDelivery = (inputDelivery: IDeliveryOption) => {
  const { payment, courier } = inputDelivery;
  if (payment) {
    return {
      methodPayment: "prepayment courier",
      cost: deliveryCost.payment,
    };
  } else if (courier) {
    return { methodPayment: "courier", cost: deliveryCost.courier };
  } else return { methodPayment: "own", cost: 0 };
};

export const preparePaymentMethod = (option: IPaymentInputs, id?: string) => {
  if (option.transfer) {
    return { method: "transfer", paid: false, id };
  } else return { method: "delivery", paid: false };
};

export const preparePrice = (
  price: number,
  discount: number,
  amount: number
) => {
  return (price - (price * discount) / 100) * amount;
};

export const prepareActiveStar = (stars?: Array<number>) => {
  if (stars?.length && stars.length > 0) {
    const amountOfStar = stars.reduce((total, starAmount) => {
      return total + starAmount;
    }, 0);
    const factoryOfTen = Math.pow(10, 2);

    return (
      Math.round((amountOfStar / stars.length) * factoryOfTen) / factoryOfTen
    );
  }
  return 0;
};
export const prepareTotalPrice = (items: Inventory[]) => {
  return items.reduce((total, item) => {
    return (
      total + item.amount * (item.price - (item.price * item.discount) / 100)
    );
  }, 0);
};
