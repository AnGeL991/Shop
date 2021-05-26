import { FC } from "react";
import "./sale.scss";

interface ISale {
  discount?: number;
}

export const Sale: FC<ISale> = ({ discount = 35 }) => {
  return (
    <section className="sale">
      <article className="sale__product">
        <img src='./../images/right-banner-2.jpg' alt='saleFoto' />
      </article>
      <article className="sale__discount">
        <h3 className="sale__discountTitle">Sale</h3>
        <p className="sale__description">save up to</p>
        <span className="sale__percent">-{discount}% OFF</span>
      </article>
    </section>
  );
};
