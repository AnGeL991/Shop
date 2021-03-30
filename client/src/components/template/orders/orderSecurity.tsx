import { FC } from "react";
import { securityInfo } from "db";

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
    </section>
  );
};
