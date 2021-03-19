import { FC } from 'react';
import { Item } from './item';
import { useBasketLogic } from '_hooks';

export const OrderProduct: FC = () => {
  const { items, delivery, totalPrice } = useBasketLogic();

  const orders = items.map((el) => <Item key={el._id} {...el} />);

  return (
    <div className="content">
      {orders}
      <div className="content__payBox">
        <div>
          <p className="content__totalPay">
            Razem za produkty: <span>{totalPrice.toFixed(2)} $</span>
          </p>
          <p className="content__delivery">
            Dostawa do domu: <span>{delivery.toFixed(2)} $</span>
          </p>
        </div>
        <div className="content__summary">
          <p className="content__finalPay">
            Razem do zapłaty: <span>{(delivery + totalPrice).toFixed(2)}$</span>
          </p>
          <p className="content__discountCode">
            Mam kod rabatowy lub karte duzej rodziny
          </p>
          <button className="content__submitBtn">Przejdz do kasy</button>
        </div>
      </div>
    </div>
  );
};
