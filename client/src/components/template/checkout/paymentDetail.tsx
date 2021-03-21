import { FC } from "react";
import {Icons} from 'components/common';
interface Detail {
  title: string;
  firstName: string;
  surName: string;
  street: string;
  city: string;
  postCode: string;
  phone: number;
  delivery?:string;
}

export const PaymentDetail: FC<Detail> = ({
  title,
  firstName,
  surName,
  street,
  city,
  postCode,
  phone,
  delivery
}) => {
  return (
    <article className='detail'>
      <div className='detail__wrapper'>
        <div className='detail__edit'><Icons.PenIcon className='detail__icon'/><span>Edytuj</span></div>
        <h4 className='detail__title'>{title}</h4>
        <div className='detail__box'>
            {delivery && <span className='detail__item detail__item--delivery'>{delivery}</span> }
          <span className='detail__item'>{firstName + " " + surName}</span>
          <span className='detail__item'>{street}</span>
          <span className='detail__item'>{city +', '+postCode}</span>
          <span className='detail__item'>{phone}</span>
        </div>
      </div>
    </article>
  );
};
