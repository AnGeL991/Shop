import { FC } from 'react';
import './orderProduct.scss';
import { Item } from './subComponents/item';
import { useBasketLogic } from '_hooks';

export const OrderProduct: FC = () => {
  const { items, delivery, price } = useBasketLogic();

  const orders = items.map((el) => <Item key={el._id} {...el} />);

  return (
    <div className="order">
      {orders}
      <div className="order__payBox">
        <div>
          <p className="order__totalPay">
            Razem za produkty: <span>{price.toFixed(2)} $</span>
          </p>
          <p className="order__delivery">
            Dostawa do domu: <span>{delivery.toFixed(2)} $</span>
          </p>
        </div>
        <div className="order__summary">
          <p className="order__finalPay">
            Razem do zapłaty: <span>{(delivery + price).toFixed(2)}$</span>
          </p>
          <p className="order__discountCode">
            Mam kod rabatowy lub karte duzej rodziny
          </p>
          <button className="order__submitBtn">Przejdz do kasy</button>
        </div>
      </div>
    </div>
  );
};
