import { FC } from "react";
import { Header } from "components/common";
import { LoginForm, ProgressList, GouestOption } from "components/template";
import { Redirect } from "react-router-dom";
import { usePaymentsLogic } from "_hooks";
import "styles/pageStyle/checkout.scss";

export const Checkout: FC = () => {
  const { isAuthenticated } = usePaymentsLogic();

  if (isAuthenticated) {
    return <Redirect to="/checkout/delivery" />;
  }
  return (
    <section className="checkout">
      <ProgressList active={1} />
      <GouestOption />
      <Header
        title="Log in and buy"
        className="checkout__header"
        style={{ fontWeight: 500, padding: "10px" }}
      />
      <LoginForm to="/checkout" />
    </section>
  );
};
