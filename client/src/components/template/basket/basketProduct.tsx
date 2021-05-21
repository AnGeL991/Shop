import { FC } from "react";
import { Icons } from "components/common";
import { ReadMore } from "components/template";
import { Inventory } from "components/interfaces";
import { useChangeAmountLogic, useProductBoxLogic } from "_hooks";

type BasketProps = {
  item: Inventory;
};

export const BasketProduct: FC<BasketProps> = ({ item }) => {
  const { _id, image, title, time, amount } = item;

  const {
    discountPrice,
    totalPrice,
    handleRedirectToProduct,
  } = useProductBoxLogic(item);
  const { increment, decrement, removeProduct } = useChangeAmountLogic(_id);

  return (
    <div className="basketProduct">
      <div className="basketProduct__image"
      onClick={handleRedirectToProduct}>
        <img src={image} alt={title} className="basketProduct__img" />
      </div>
      <div
        className="basketProduct__productInfo"
        
      >
        <h4 className="basketProduct__title">{title}</h4>
        <ReadMore title="More Details" className="basketRead">
          <p className="basketProduct__description">{time}</p>
        </ReadMore>
        <p className="basketProduct__price">
          Price: {amount} x ${discountPrice.toFixed(2)}
        </p>
        <p className="basketProduct__totalPrice">
          Total price: ${totalPrice.toFixed(2)}
        </p>
      </div>
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
          <Icons.BinIcon size="10" />
        </button>
      </div>
    </div>
  );
};
