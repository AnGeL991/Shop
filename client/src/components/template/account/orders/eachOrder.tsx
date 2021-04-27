import { FC } from "react";
import { Icons } from "components/common";
import { OrderDetails } from "components/template";
import { useToggleClick } from "_hooks";
import { PaymentState } from "store/payment";
import '../style/table.scss';
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
          <p className="table__strong">Delivered </p> {dateDelivered}
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

{
  /* <tr className={`table__order ${open && "table__order--active"}`}>
<td>
  <table>
    <tbody>
      <tr className="table__row table__row--product">
        <td className="table__column table__column--img table__column--product">
          <img
            src="https://www.szynaka.pl/media/catalog/product/cache/ea457f1f415be7794f4835445c3a7ce8/m/e/mediolan_02_galeria_01_1.jpg"
            alt="produt foto"
            className="table__orderImg"
          />
        </td>
        <td className="table__column table__column--product">
          <span>Mediolan 02</span>
        </td>
        <td className="table__column table__column--product">
          <span>
            <strong>Price:</strong> 2200$
          </span>
        </td>
        <td className="table__column table__column--product">
          <span>
            <strong>amount:</strong> 1
          </span>
        </td>
        <td className="table__column table__column--product">
          <Button className="table__orderButton">Add comment</Button>
        </td>
      </tr>
      <tr className="table__row table__row--detail">
        <td className="table__column table__column--detail">
          <h4 className="table__detailHeader">Delivery details</h4>
          <span>Adrian Markuszewski</span>
          <span>Rydzyn Szlacheki 07 </span>
          <span>06-445 Strzegowo</span>
          <span> 539-924-732</span>
          <span>adrian-markuszewski99@wp.pl</span>
        </td>
        <td className="table__column table__column--detail">
          <h4 className="table__detailHeader">Price details</h4>
          <div className="table__price">
            <strong>Item Subtotal</strong>
            <span>15231.00 zł</span>
          </div>
          <div className="table__price">
            <strong>delivery</strong>
            <span>29.00 zł</span>
          </div>
          <div className="table__price">
            <strong>Total</strong>
            <span>15231.00 zł</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</td>
</tr> */
}
