import { FC,useState } from 'react';
import { ImBin } from 'react-icons/im';
import { ReadMore } from 'components/common';

type Props = {
  id: string | number;
  title: string;
  image: string;
  price: number | string;
  description: string;
  amount?: string;
};


export const BasketProduct: FC<Props> = ({
  title,
  image,
  price,
  description,
  amount = 1,
}) => {

  const [testAmount,setAmount] = useState(1);

  const handleAdd =()=>setAmount(prev=>prev + 1)
  const handleRemove =()=>setAmount(prev=>prev - 1)


  return (
    <div className="basketProduct">
      <div className="basketProduct__image">
        <img src={image} alt={title} className="basketProduct__img" />
      </div>
      <div className="basketProduct__productInfo">
        <h4 className="basketProduct__title">{title}</h4>
        <ReadMore title="Wiecej szczegółów" className="basketRead">
          <p className='basketProduct__description'>{description}</p>
        </ReadMore>
        <p className="basketProduct__price">Price: ${price}</p>
        <p className="basketProduct__totalPrice">Total price: ${price}</p>
        <div className="basketProduct__amountBox">
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
            onChange={()=>console.log(testAmount)}
          />
          <button name="increment" className="basketProduct__btn" onClick={handleAdd}>
            +
          </button>
          <button className="basketProduct__btn">
            <ImBin size="10" />
          </button>
        </div>
      </div>
    </div>
  );
};
