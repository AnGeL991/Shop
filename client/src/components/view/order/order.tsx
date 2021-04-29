import { FC } from "react";
import { OrderSecurity, OrderProduct } from "components/template";
import { Header } from "components/common";

export const Order: FC = () => {
  return (
    <section>
      <Header title="Basket" />
      <OrderProduct />
      <OrderSecurity />
    </section>
  );
};
