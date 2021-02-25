import { FunctionComponent } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Circle } from '../circle/circle';
import { BasketProduct } from 'components/common';
import { Link } from 'react-router-dom';
import { DarkButton } from '../darkButton/darkButton';
import { useBasketLogic, useToggleClick } from '_hooks/';
import './basket.scss';

export const Basket: FunctionComponent = () => {
  const { amount, items, price } = useBasketLogic();
  const { open, handleToggle } = useToggleClick();

  const renderBasket =
    amount === 0 ? (
      <div className="basket__empty">
        <p className="basket__title">No products in the cart.</p>
      </div>
    ) : (
      <>
        {items.map((el) => (
          <BasketProduct
            key={el._id}
            title={el.title}
            image={el.image}
            price={el.price}
            time={el.time}
            amount={el.amount}
            _id={el._id}
          />
        ))}{' '}
      </>
    );

  return (
    <>
      <div onClick={handleToggle} className="icon icon__last">
        <Circle amount={amount} />
        <AiOutlineShoppingCart size="28" />
      </div>
      <div className={`basket ${open && 'basket__active'}`}>
        <div className="basket__context">
          <h4 className="basket__subTitle">Wartość twoje zamówienia</h4>
          <span className="basket__amount">(Ilość produktów: {amount} )</span>
          <span className="basket__price">{price} $</span>
          <DarkButton>
            <Link to="/order">Zobacz koszyk</Link>
          </DarkButton>
        </div>
        <div className="basket__products ">{renderBasket}</div>
        <DarkButton>
          <Link to="/">Przejdz do kasy</Link>
        </DarkButton>
      </div>
    </>
  );
};
