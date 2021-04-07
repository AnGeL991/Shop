import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Icons, Circle, BasketProduct, Button } from "components/common";
import { useBasketLogic } from "./hooks/useBasketLogic";
import { useToggleClick } from "_hooks/";
import { Inventory } from "store/inventory";
import "./style/basket.scss";

interface ItemProps {
  count: number;
  items: Inventory[];
}

const Items: FC<ItemProps> = ({ count, items }) => {
  return count === 0 ? (
    <div className="basket__empty">
      <p className="basket__title">No products in the cart.</p>
    </div>
  ) : (
    <>
      {items.map((el) => (
        <BasketProduct key={el._id} item={el} />
      ))}
    </>
  );
};

export const Basket: FC = () => {
  const { count, items, totalPrice } = useBasketLogic();
  const { open, handleToggle, handleClose } = useToggleClick();

  const BasketWithItems = useMemo(() => <Items {...{ count, items }} />, [
    count,
    items,
  ]);
  const redirect = useMemo(() => (count === 0 ? "/order" : "/checkout"), [
    count,
  ]);

  return (
    <>
      <div onClick={handleToggle} className="icon icon__last">
        <Circle amount={count} />
        <Icons.BasketIcon size="28" />
      </div>
      <div
        className={`basket ${open && "basket__active"}`}
        onMouseLeave={handleClose}
      >
        <div className="basket__context">
          <h4 className="basket__subTitle">Wartość twoje zamówienia</h4>
          <span className="basket__amount">(Ilość produktów: {count} )</span>
          <span className="basket__price">{totalPrice.toFixed(2)} $</span>
          <Button darkButton onClick={handleToggle}>
            <Link to="/order">View cart</Link>
          </Button>
        </div>
        <div className="basket__products ">{BasketWithItems}</div>
        <Button darkButton onClick={handleToggle}>
          <Link to={redirect}>Checkout</Link>
        </Button>
      </div>
    </>
  );
};
