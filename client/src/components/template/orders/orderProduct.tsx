import { FC, useMemo } from "react";
import { Item } from "./item";
import {Button} from 'components/common';
import { useBasketLogic } from "_hooks";
import { Link } from "react-router-dom";
import "./style/orderProduct.scss";

export const OrderProduct: FC = () => {
  const { items, delivery, totalPrice } = useBasketLogic();

  const orders = useMemo(
    () => items.map((el) => <Item key={el._id} {...el} />),
    [items]
  );

  if (orders.length <= 0) {
    return (
      <div className="basket__empty">
        <p className="basket__title">No products in the cart.</p>
      </div>
    );
  }
  return (
    <div className="content">
      <div className="content__orders">{orders}</div>
      <div className="content__payBox">
        <div>
          <p className="content__totalPay">
            Subtotal payment: <span>{totalPrice.toFixed(2)} $</span>
          </p>
          <p className="content__delivery">
            home delivery: <span>{delivery.toFixed(2)} $</span>
          </p>
        </div>
        <div className="content__summary">
          <p className="content__finalPay">
            Total Payment: <span>{(delivery + totalPrice).toFixed(2)}$</span>
          </p>
          <p className="content__discountCode">I have a coupon</p>
          <Link to='/checkout'>
            <Button className="content__submitBtn">Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
