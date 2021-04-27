import { FC } from "react";

interface IOrdersFilter {
  filter: { date: boolean; status: boolean; orderId: boolean };
  onClick: (option: string) => void;
}

export const OrdersFilter: FC<IOrdersFilter> = ({ filter, onClick }) => {
  return (
    <div>
      <span
        className={`orders__filtr ${filter.date && "orders__filter--active"}`}
        onClick={() => onClick("date")}
      >
        Date
      </span>
      <span
        className={`orders__filtr ${filter.status && "orders__filter--active"}`}
        onClick={() => onClick("status")}
      >
        Status
      </span>
      <span
        className={`orders__filtr ${
          filter.orderId && "orders__filter--active"
        }`}
        onClick={() => onClick("orderId")}
      >
        order
      </span>
    </div>
  );
};
