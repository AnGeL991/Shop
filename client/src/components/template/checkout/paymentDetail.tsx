import { FC } from "react";
import { Link } from "react-router-dom";
import { Icons } from "components/common";
import { Delivery } from "store/order";

interface Detail {
  detail: Delivery;
  title: string;
  delivery?: boolean;
  to?: string;
}

export const PaymentDetail: FC<Detail> = ({ title, delivery, detail, to }) => {
  const { firstName, surName, street, city, postCode, phone } = detail;

  const deliveryStatus = detail.payment || detail.courier ? "Kurier" : "Own";

  const link = to ? (
    <Link to={`/checkout/${to}`}>
      <Icons.PenIcon className="detail__icon" />
      <span>Edytuj</span>
    </Link>
  ) : (
    <>
      <Icons.PenIcon className="detail__icon" />
      <span>Edytuj</span>
    </>
  );

  return (
    <article className="detail">
      <div className="detail__wrapper">
        <div className="detail__edit">{link}</div>
        <h4 className="detail__title">{title}</h4>
        <div className="detail__box">
          {delivery === true && (
            <span className="detail__item detail__item--delivery">
              {deliveryStatus}
            </span>
          )}
          <span className="detail__item">{firstName + " " + surName}</span>
          <span className="detail__item">{street}</span>
          <span className="detail__item">{city + ", " + postCode}</span>
          <span className="detail__item">{phone}</span>
        </div>
      </div>
    </article>
  );
};
