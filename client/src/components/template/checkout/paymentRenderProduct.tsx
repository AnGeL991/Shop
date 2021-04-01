import { FC, useMemo } from "react";
import { PaymentProduct } from "components/template";
import { usePaymentsLogic } from "_hooks";
import "./style/confirm.scss";

export const PaymentRenderProduct: FC = () => {
  const { products } = usePaymentsLogic();

  const orderProducts = useMemo(
    () =>
      products.map((el) => (
        <PaymentProduct
          key={el._id}
          title={el.title}
          img={el.image}
          amount={el.amount}
          price={el.price}
          discount={el.discount}
        />
      )),
    [products]
  );

  return (
    <section>
      <article className="confirm">
        <div className="confirm__wrapper">{orderProducts}</div>
      </article>
    </section>
  );
};
