import { FC } from 'react';
import { ImBin } from 'react-icons/im';
import { ReadMore } from 'components/common';
import { useChangeAmountLogic } from '_hooks';

type Props = {
  title: string;
  image: string;
  price: number;
  time?: string;
  amount: number;
  _id: string;
};

export const BasketProduct: FC<Props> = ({
  title,
  image,
  price,
  amount,
  time,
  _id,
}) => {
  const { increment, decrement, removeProduct } = useChangeAmountLogic(_id);

  return (
    <div className="basketProduct">
      <div className="basketProduct__image">
        <img src={image} alt={title} className="basketProduct__img" />
      </div>
      <div className="basketProduct__productInfo">
        <h4 className="basketProduct__title">{title}</h4>
        <ReadMore title="Wiecej szczegółów" className="basketRead">
          <p className="basketProduct__description">{time}</p>
        </ReadMore>
        <p className="basketProduct__price">
          Price: {amount} x ${price}
        </p>
        <p className="basketProduct__totalPrice">
          Total price: ${price * amount}
        </p>
        <div className="basketProduct__amountBox">
          <button
            name="decrement"
            className="basketProduct__btn"
            disabled={amount === 1 ? true : false}
            onClick={decrement}
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            className="basketProduct__amountInput"
            disabled
          />
          <button
            name="increment"
            className="basketProduct__btn"
            onClick={increment}
          >
            +
          </button>
          <button className="basketProduct__btn" onClick={removeProduct}>
            <ImBin size="10" />
          </button>
        </div>
      </div>
    </div>
  );
};
