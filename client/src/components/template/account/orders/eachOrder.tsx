import { FC } from "react";
import { Icons } from "components/common";
import { OrderDetails } from "components/template";
import { useToggleClick } from "_hooks";
import { PaymentState } from "store/payment";
import "../style/table.scss";
interface IEachOrder {
  order: PaymentState;
  amount: number;
  dateDelivered?: string;
}

export const EachOrder: FC<IEachOrder> = ({
  order,
  dateDelivered = "No delivered yet",
  amount,
}) => {
  const { open, handleToggle } = useToggleClick();
  const { ArrowDown, ArrowRight } = Icons;
  const {
    paymentStatus: { paid },
    delivery,
    deliveryCost,
    totalPayment,
    products,
    id,
  } = order;

  const amountOfItems =
    amount > 1 ? <span>{amount} items</span> : <span>{amount} item</span>;

  const arrow = open ? (
    <ArrowDown className="table__arrow" />
  ) : (
    <ArrowRight className="table__arrow" />
  );

  return (
    <>
      <tr className="table__row">
        <td
          className="table__column table__column--small table__column--arrow"
          onClick={handleToggle}
        >
          {<span>{arrow}</span>}
        </td>
        <td className="table__column">
          <p className="table__strong">Order #</p> {id}
        </td>
        <td className="table__column">
          <strong className="table__strong">Delivered</strong>
          <span className="table__delivery">{dateDelivered}</span>
        </td>
        <td className="table__column">{amountOfItems}</td>
        <td className="table__column">
          <span className={`table__status  ${paid && "table__status--pay"}`}>
            {paid ? "pay" : "no pay"}
          </span>
        </td>
      </tr>
      <OrderDetails
        open={open}
        products={products}
        delivery={delivery}
        deliveryCost={deliveryCost}
        totalPayment={totalPayment}
      />
    </>
  );
};
