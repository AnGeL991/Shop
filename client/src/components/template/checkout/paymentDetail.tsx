import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { FieldChecked, Icons } from "components/common";
import { PaymentWay } from "store/payment";
import "./style/detail.scss";
interface Detail {
  title: string;
  firstName?: string;
  surName?: string;
  email?: string;
  phone?: number;
  to?: string;
  city?: string;
  postCode?: string;
  street?: string;
  payment?: PaymentWay;
}

const {
  PenIcon,
  Email,
  PersonIcon,
  Adress,
  HomeIcon,
  Phone,
  PaymentCard,
  DeliveryIcon,
} = Icons;

export const PaymentDetail: FC<Detail> = ({
  title,
  firstName,
  surName,
  email,
  phone,
  city,
  postCode,
  street,
  to,
  payment,
}) => {
  const link = useMemo(
    () =>
      to ? (
        <Link to={`/checkout/${to}`}>
          <PenIcon className="detail__icon" />
        </Link>
      ) : (
        <>
          <PenIcon className="detail__icon" />
        </>
      ),
    [to]
  );

  return (
    <article className="detail">
      <div className="detail__wrapper">
        <div className="detail__edit">{link}</div>
        <h4 className="detail__title">{title}</h4>
        <div className="detail__box">
          {firstName && surName && (
            <span className="detail__item">
              <PersonIcon className="detail__itemIcon" />
              {firstName + " " + surName}
            </span>
          )}
          {email && (
            <span className="detail__item">
              <Email className="detail__itemIcon" /> {email}
            </span>
          )}
          {street && (
            <span className="detail__item">
              <HomeIcon className="detail__itemIcon" />
              {street}
            </span>
          )}
          {city && postCode && (
            <span className="detail__item">
              <Adress className="detail__itemIcon" />
              {city + "," + postCode}
            </span>
          )}
          {phone && (
            <span className="detail__item">
              <Phone className="detail__itemIcon" />
              {phone}
            </span>
          )}
          {payment && (
            <span className="detail__item">
              {payment.methodPayment === "transfer" ? (
                <DeliveryIcon className="detail__itemIcon" />
              ) : (
                <PaymentCard className="detail__itemIcon" />
              )}
              {payment.methodPayment}
            </span>
          )}
          {payment && (
            <FieldChecked checked name="PaymentAdress" type="checkbox">
              <span className="detail__item">Use shipping adress </span>
            </FieldChecked>
          )}
        </div>
      </div>
    </article>
  );
};
