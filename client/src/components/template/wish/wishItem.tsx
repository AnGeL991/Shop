import { FC, useMemo } from "react";
import { Button } from "components/common";
import { Icons } from "components/common";
import { Inventory } from "store/inventory";
import { useProductBoxLogic } from "_hooks";

type WishItemProps = {
  item: Inventory;
  onClick: (id: string) => void;
};

export const WishItem: FC<WishItemProps> = ({ onClick, item }) => {
  const { amount, image, title, discount } = item;
  const { addProductToOrder, discountPrice } = useProductBoxLogic(item);

  const status = useMemo(
    () => (amount ? <strong>In stock</strong> : <strong>out of stock</strong>),
    [amount]
  );

  const out = useMemo(
    () => (!amount ? <div className="wish__out">Out of Stock</div> : null),
    [amount]
  );
  const amountDiscount = useMemo(
    () =>
      discount !== 0 ? (
        <span className="wish__discount">-{discount}%</span>
      ) : null,
    [discount]
  );

  return (
    <article>
      <div className={`wish__product ${!amount ? "wish__product--out" : ""}`}>
        {amountDiscount}
        {out}
        <div className="wish__images">
          <img className="wish__img" src={image} alt={title} />
          <span className="wish__discount">-{discount}%</span>
        </div>
        <div className="wish__info">
          <h4 className="wish__title">{title}</h4>
          <div
            className={`wish__status ${
              amount ? "wish__status--available" : null
            }`}
          >
            <span>Stock:</span>
            {status}
          </div>
          <div className="wish__priceBox">
            <span>Price:</span>
            <strong>${discountPrice.toFixed(2)}</strong>
          </div>
          <div className="wish__remove">
            <Button
              darkButton
              className="wish__icon"
              onClick={() => onClick(item._id)}
            >
              <Icons.BinIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="wish__buttonBox">
        <Button
          darkButton
          className={`wish__button ${
            amount === 0 ? "wish__button--disable" : null
          }`}
          disabled={amount === 0}
          onClick={addProductToOrder}
        >
          ADD TO CART
        </Button>
      </div>
    </article>
  );
};
