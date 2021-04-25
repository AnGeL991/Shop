import { FC } from "react";
import { Icons } from "components/common";

interface IEachOrder {
  order: string | number;
  amount: number;
  status: boolean;
  dateDelivered?: string;
}

export const EachOrder: FC<IEachOrder> = ({
  order,
  amount,
  status,
  dateDelivered = 'No delivered yet',
}) => {
  const amountOfItems =
    amount > 1 ? <span>{amount} items</span> : <span>{amount} item</span>;
  return (
    <tr className="table__row">
      <td className="table__column table__column--small table__column--arrow">
        <span>
          <Icons.ArrowRight className="table__arrow" />
        </span>
      </td>
      <td className="table__column">
        <p className="table__strong">Order #</p> {order}
      </td>
      <td className="table__column">
        <p className="table__strong">Delivered </p> {dateDelivered}
      </td>
      <td className="table__column">{amountOfItems}</td>
      <td className="table__column">
        <span
          className={`table__status  ${
            status && "table__status--pay"
          }`}
        >
          {status ? 'pay' : 'no pay'}
        </span>
      </td>
    </tr>
  );
};
