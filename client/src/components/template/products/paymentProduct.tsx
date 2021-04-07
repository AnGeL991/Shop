import { FC } from "react";
import { preparePrice } from "_helpers/utils";
import "./style/paymentProduct.scss";

interface IPaymentProduct {
  title: string;
  img: string;
  amount: number;
  price: number;
  discount?: number;
  fullWidth?:boolean;
}

export const PaymentProduct: FC<IPaymentProduct> = ({
  title,
  img,
  amount,
  price,
  discount,
  fullWidth
}) => {
  
  const currentPrice = preparePrice(price, discount ? discount : 0, amount);
  
  return (
    <section className={`${fullWidth &&  'paymentProduct__section' }`}>
      <div className="paymentProduct">
        <h4 className="paymentProduct__title">{title}</h4>
        <div className="paymentProduct__productImg">
          <img src={img} alt={title}  className={`${fullWidth &&  'paymentProduct__img' }`} />
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
