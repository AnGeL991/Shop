import { FC,useMemo } from 'react';
import { Icons,Circle,BasketProduct,Button } from 'components/common';
import { Link } from 'react-router-dom';
import { useBasketLogic, useToggleClick } from '_hooks/';
import './basket.scss';

export const Basket: FC = () => {

  const { count, items, totalPrice } = useBasketLogic();
  const { open, handleToggle } = useToggleClick();

  const renderBasket = useMemo(()=>
  count === 0 ? (
    <div className="basket__empty">
      <p className="basket__title">No products in the cart.</p>
    </div>
  ) : (
    <>
      {items.map((el) => (
        <BasketProduct
          key={el._id}
          item={el}
        />
      ))}
    </>
  ),[count,items])
 

  return (
    <>
      <div onClick={handleToggle} className="icon icon__last">
        <Circle amount={count} />
        <Icons.BasketIcon size="28" />
      </div>
      <div className={`basket ${open && 'basket__active'}`}>
        <div className="basket__context">
          <h4 className="basket__subTitle">Wartość twoje zamówienia</h4>
          <span className="basket__amount">(Ilość produktów: {count} )</span>
          <span className="basket__price">{totalPrice.toFixed(2)} $</span>
          <Button darkButton>
            <Link to="/order">Zobacz koszyk</Link>
          </Button>
        </div>
        <div className="basket__products ">{renderBasket}</div>
        <Button darkButton>
          <Link to="/">Przejdz do kasy</Link>
        </Button>
      </div>
    </>
  );
};
