import { FC } from "react";
import { securityInfo } from "db";
import { Link } from "react-router-dom";
import { Button } from "components/common";
import "./style/orderSecurity.scss";

export const OrderSecurity: FC = () => {
  const Info = securityInfo.map((item) => (
    <li key={item.title} className="security__info">
      <h3 className="security__title">{item.title}</h3>
      <p className="security__text">{item.text}</p>
    </li>
  ));

  return (
    <section className="security__wrapper">
      <ul className="security__wrapper">{Info}</ul>
      <div className="security__basketBox">
        <Button darkButton>
          <Link to="/shop">return to Shop</Link>
        </Button>
      </div>
    </section>
  );
};
