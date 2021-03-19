import { FC } from "react";
import {Icons}from 'components/common';
import { ReadMore } from "components/common";
import { useChangeAmountLogic } from "_hooks";

type OrderProductProps = {
  title: string;
  image: string;
  price: number;
  amount: number;
  discount: number;
  _id: string;
  time?: string;
};

export const Item: FC<OrderProductProps> = ({
  _id,
  image,
  title,
  price,
  amount,
  time,
  discount,
}) => {
  const { increment, decrement, removeProduct } = useChangeAmountLogic(_id);

  const currentPrice =
    discount !== 0 ? price - (price * discount) / 100 : price;
    
  return (
    <div className="orderProduct__wrapper">
      <div className="orderProduct__image">
        <img src={image} alt={title} className="orderProduct__img" />
      </div>
      <div className="orderProduct__productInfo">
        <h4 className="orderProduct__title">{title}</h4>
        <ReadMore
          title="Wiecej Szegółów"
          className="basketRead"
          style={{ width: "100%" }}
        >
          <p className="basketRead__description">{time}</p>
        </ReadMore>
      </div>
      <div className="orderProduct__priceBox">
        <p className="orderProduct__eachPrice">
          Price: {amount} x <span>{currentPrice} $</span>
        </p>
        <div className="orderProduct__amountBox">
          <button
            name="decrement"
            className="orderProduct__btn"
            disabled={amount === 1 ? true : false}
            onClick={decrement}
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            className="orderProduct__amountInput"
            disabled
          />
          <button
            name="increment"
            className="orderProduct__btn"
            onClick={increment}
          >
            +
          </button>
          <button className="orderProduct__btn" onClick={removeProduct}>
            <Icons.EyeIcon size="10" />
          </button>
        </div>
        <p className="orderProduct__totalPrice">
          Total pay: <span>{amount * currentPrice} $</span>
        </p>
      </div>
    </div>
  );
};
