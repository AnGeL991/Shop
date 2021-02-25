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

export const Item: FC<Props> = ({ _id, image, title, price, amount, time }) => {
  const { increment, decrement, removeProduct } = useChangeAmountLogic(_id);

  return (
    <div className="eachOrder__wrapper">
      <div className="eachOrder__image">
        <img src={image} alt={title} className="eachOrder__img" />
      </div>
      <div className="eachOrder__productInfo">
        <h4 className="eachOrder__title">{title}</h4>
        <ReadMore
          title="Wiecej Szegółów"
          className="basketRead"
          style={{ width: '100%' }}
        >
          <p className="basketRead__description">{time}</p>
        </ReadMore>
      </div>
      <div className="eachOrder__priceBox">
        <p className="eachOrder__eachPrice">
          Price: {amount} x <span>{price} $</span>
        </p>
        <div className="eachOrder__amountBox">
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
            onChange={() => console.log(amount)}
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
        <p className="eachOrder__totalPrice">
          Total pay: <span>{amount * price} $</span>
        </p>
      </div>
    </div>
  );
};
