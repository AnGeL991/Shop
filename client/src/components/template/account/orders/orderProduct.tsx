import { FC } from "react";
import { Button } from "components/common";

interface IOrderProduct {
  _id: string;
  image: string;
  title: string;
  price: number | string;
  amount: number | string;
}

export const OrderProductDetail: FC<IOrderProduct> = ({
  _id,
  title,
  price,
  amount,
  image,
}) => {
  return (
    <tr className="table__row table__row--product">
      <td className="table__column table__column--img table__column--product">
        <img src={image} alt={title} className="table__orderImg" />
      </td>
      <td className="table__column table__column--product">
        <span>{title}</span>
      </td>
      <td className="table__column table__column--product">
        <span>
          <strong>Price:</strong> {price}$
        </span>
      </td>
      <td className="table__column table__column--product">
        <span>
          <strong>amount:</strong> {amount}
        </span>
      </td>
      <td className="table__column table__column--product">
        <Button className="table__orderButton">Add comment</Button>
      </td>
    </tr>
  );
};
