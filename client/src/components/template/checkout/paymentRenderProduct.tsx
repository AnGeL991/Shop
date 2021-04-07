import { FC, useMemo } from "react";
import { PaymentProduct } from "components/template";
import { useGetState } from "_hooks";
import "./style/confirm.scss";

interface IPaymentRender {
  title?:string,
  fullWidth?:boolean;
}

export const PaymentRenderProduct: FC<IPaymentRender> = ({ title,fullWidth }) => {
  const { payment } = useGetState();

  const orderProducts = useMemo(
    () =>
      payment.products.map((el) => (
        <PaymentProduct
          key={el._id}
          title={el.title}
          img={el.image}
          amount={el.amount}
          price={el.price}
          discount={el.discount}
          fullWidth={fullWidth}
        />
      )),
    [payment.products,fullWidth]
  );
  
  return (
    <section>
      <article className="confirm">
        <div className="confirm__title">{title}</div>
        <div className='confirm__amount'> Amount of products: <span>{payment.products.length}</span> </div>
        <div className={`
        confirm__wrapper
        confirm__wrapper
        `}>{orderProducts}</div>
      </article>
    </section>
  );
};
