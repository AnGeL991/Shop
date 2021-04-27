import { FC } from "react";
import { OrderProductDetail } from "components/template";
import { IDeliveryAdress, Inventory } from "components/interfaces";

interface IOrderDetails {
  open: boolean;
  products: Inventory[];
  delivery: IDeliveryAdress;
  totalPayment: number;
  deliveryCost: { methodPayment: string; cost: number };
}

export const OrderDetails: FC<IOrderDetails> = ({
  open,
  products,
  delivery,
  deliveryCost,
  totalPayment,
}) => {
  const product = products.map((el, index) => (
    <OrderProductDetail key={index} {...el} />
  ));
  const maxHeight = products.length * 45 + 130
  const { firstName, surName, city, phone, postCode, email, street } = delivery;
  return (
    <tr
      className={`table__order ${open && "table__order--active"}`}
      style={{ 
      maxHeight: `${maxHeight}px`,
      overflow:`${maxHeight >355 ?'scroll':'none'}`
    }}
    >
      <td style={{ display: "block" }}>
        <table className="table">
          <tbody>
            {product}
            <tr className="table__row table__row--detail">
              <td className="table__column table__column--detail">
                <h4 className="table__detailHeader">Delivery details</h4>
                <span>
                  {firstName} {surName}
                </span>
                <span>{street} </span>
                <span>
                  {postCode} {city}
                </span>
                <span> {phone}</span>
                <span>{email}</span>
              </td>
              <td className="table__column table__column--detail">
                <h4 className="table__detailHeader">Price details</h4>
                <div className="table__price">
                  <strong>Item Subtotal</strong>
                  <span>{totalPayment.toFixed(2)} zł</span>
                </div>
                <div className="table__price">
                  <strong>delivery</strong>
                  <span>{deliveryCost.cost.toFixed(2)} zł</span>
                </div>
                <div className="table__price">
                  <strong>Total</strong>
                  <span>
                    {(totalPayment + deliveryCost.cost).toFixed(2)} zł
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};
