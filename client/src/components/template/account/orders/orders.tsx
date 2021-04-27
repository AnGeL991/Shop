/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useMemo, useEffect } from "react";
import {
  AccountHeader,
  EachOrder,
  Empty,
  OrdersFilter,
  AddOrderByNumber,
} from "components/template";
import { useGetState, useToggleClick } from "_hooks";
import { useOrdersLogic } from "./useOrdersLogic";
import "../style/orders.scss";

interface IOrders {
  active: boolean;
}

export const UserOrders: FC<IOrders> = ({ active }) => {
  const { open, handleToggle } = useToggleClick();
  const {
    alert: { type, message },
  } = useGetState();
  const {
    sortedOrder,
    amountOfProduct,
    fetchOrder,
    handleChangeSorted,
    sortedBy,
    orders,
  } = useOrdersLogic();

 
  useEffect(() => {
    if (orders.length === 0 && (active || open)) {
      fetchOrder();
    }
  }, [active,open]);


  const yourOrders = useMemo(
    () =>
      sortedOrder
        ? sortedOrder.map((el, index) => (
            <EachOrder key={index} order={el} amount={amountOfProduct[index]} />
          ))
        : [sortedOrder],
    [sortedOrder, amountOfProduct]
  );

  const ordersContent =
    yourOrders.length > 0 ? (
      <>
        <OrdersFilter filter={sortedBy} onClick={handleChangeSorted} />
        <table className="table">
          <tbody>{yourOrders}</tbody>
        </table>
      </>
    ) : (
      <Empty text="Your Orders list is empty" />
    );

  const Error = useMemo(() => {
    return (
      type === "ALERT_ERROR" && <span className="orders__error">{message}</span>
    );
  }, [type, message]);


  return (
    <section className={`orders ${active && "orders--active"} `}>
      <AccountHeader
        open={open}
        handleToggle={handleToggle}
        text="Your orders"
      />
      <article
        className={`orders__wrapper ${open && "orders__wrapper--active"}`}
      >
        {Error}
        <AddOrderByNumber />
        {ordersContent}
      </article>
    </section>
  );
};
