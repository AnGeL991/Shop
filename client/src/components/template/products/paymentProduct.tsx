import { FC } from "react";
import { preparePrice } from "_helpers/utils";
import "./style/paymentProduct.scss";

interface IPaymentProduct {
  title: string;
  img: string;
  amount: number;
  price: number;
  discount?: number;
}

export const PaymentProduct: FC<IPaymentProduct> = ({
  title,
  img,
  amount,
  price,
  discount,
}) => {
  const currentPrice = preparePrice(price, discount ? discount : 0, amount);

  return (
    <section>
      <div className="paymentProduct">
        <h4 className="paymentProduct__title">{title}</h4>
        <div className="paymentProduct__productImg">
          <img src={img} alt={title} />
        </div>
        <div className="paymentProduct__productInfo">
          <div className="paymentProduct__description">
            <span className="paymentProduct__amount">amount: {amount}</span>
            <span className="paymentProduct__price">
              price:
              <span className="paymentProduct__strongPrice">
                ${currentPrice.toFixed(2)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
