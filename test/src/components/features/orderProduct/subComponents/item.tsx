import { ReadMore } from 'components/common';
import { FC, useState } from 'react';
import { ImBin } from 'react-icons/im';
// import { useDispatch } from 'react-redux';
// import {
//   updateOrderAmount,
//   deleteOrder,
// } from '../../../../_actions/orderAction';

type Props = {
  id: number | string;
  image: string;
  title: string;
  price: string;
  description?: string;
  amount?: number;
};

export const Item: FC<Props> = ({
  id,
  image,
  title,
  description,
  price,
  amount = 1,
}) => {

  const [testAmount, setAmount] = useState(1);

  const handleAdd = () => setAmount(prev => prev + 1)
  const handleRemove = () => setAmount(prev => prev - 1)


  return (
    <div className="eachOrder__wrapper">
      <div className="eachOrder__image">
        <img src={image} alt={title} className="eachOrder__img" />
      </div>
      <div className="eachOrder__productInfo">
        <h4 className="eachOrder__title">{title}</h4>
      <ReadMore title='Wiecej Szegółów' className='basketRead' style={{width:'100%'}}>
        kolory
      </ReadMore>
      </div>
      <div className="eachOrder__priceBox">
        <p className="eachOrder__eachPrice">
          Cena jedn.: 0 <span>0 zł</span>
        </p>
        <div className="eachOrder__amountBox">
          <button
            name="decrement"
            className="basketProduct__btn"
            disabled={testAmount === 1 ? true : false}
            onClick={handleRemove}
          >
            -
          </button>
          <input
            type="text"
            value={testAmount}
            className="basketProduct__amountInput"
            onChange={() => console.log(testAmount)}
          />
          <button name="increment" className="basketProduct__btn" onClick={handleAdd}>
            +
          </button>
          <button className="basketProduct__btn">
            <ImBin size="10" />
          </button>
        </div>
        <p className="eachOrder__totalPrice">
          Wartość: <span>0 zł</span>
        </p>
      </div>
    </div>
  );
};
