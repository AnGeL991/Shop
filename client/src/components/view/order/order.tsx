import { FC } from "react";
import { OrderSecurity, OrderProduct } from "components/template";
import { Button, Header } from "components/common";
import { Link } from "react-router-dom";
import 'styles/pageStyle/order.scss';

export const Order: FC = () => {
  return (
    <section className="page">
      <Header title="Basket" />
      <OrderProduct />
      <OrderSecurity />
      <div className="order__basketBox">
        <Button darkButton>
          <Link to="/shop">return to Shop</Link>
        </Button>
      </div>
    </section>
  );
};
