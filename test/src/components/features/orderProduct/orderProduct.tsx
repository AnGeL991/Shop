import { FC } from 'react';
import './orderProduct.scss'
import {Item} from './subComponents/item';

const data =[
  {
    id: 1,
  title: 'Similique sunt in culpa',
  image:
    'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
  price: '150.00',
}
]



export const OrderProduct: FC = () => {
  const delivery = 49;

  // if ()
  //   return (
  //     <p className='order__empty'>
  //       Nie masz jeszcze produktów w koszyku.
  //     </p>
  //   );

  return (
    <div className="order">
      {data.map(el=>(
        <Item key={el.id} {...el}/>
      ))}
      <div className="order__payBox">
        <div>
          <p className="order__totalPay">
            Razem za produkty: <span>0 zł</span>
          </p>
          <p className="order__delivery">
            Dostawa do domu: <span>{delivery} zł</span>
          </p>
        </div>
        <div className="order__summary">
          <p className="order__finalPay">
            Razem do zapłaty: <span>0 zł</span>
          </p>
          <p className="order__discountCode">
            Mam kod rabatowy lub karte duzej rodziny
          </p>
          <button className="order__submitBtn">Przejdz do kasy</button>
        </div>
      </div>
    </div>
  );
};
