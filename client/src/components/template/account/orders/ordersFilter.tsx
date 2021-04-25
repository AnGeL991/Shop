import { FC } from "react";

export const OrdersFilter: FC = () => {
  return (
    <div>
      <span className={`orders__filtr orders__filter--active `}>Date</span>
      <span className="orders__filtr">Status</span>
      <span className="orders__filtr">Amount</span>
    </div>
  );
};
