import { FunctionComponent, MouseEventHandler, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Circle } from '../circle/circle';
import {BasketProduct} from 'components/common/basketProduct/basketProduct';
import {Link} from 'react-router-dom';
import './basket.scss';
import { DarkButton } from '../darkButton/darkButton';



const data = [{
  id:1,
  title:'Kubek termiczny',
  image:'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
  price: 80,
  description:'Idealny na chłodne dni'
},
{
  id:2,
  title:'Kubek termiczny',
  image:'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
  price: 80,
  description:'Idealny na chłodne dni'
},
{
  id:3,
  title:'Kubek termiczny',
  image:'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
  price: 80,
  description:'Idealny na chłodne dni'
}
];


export const Basket: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen: MouseEventHandler = () => {
    setOpen((prev) => !prev);
  };

  const renderBasket = data.length === 0 ?
  <p className="basket__title">No products in the cart.</p>
   : <>{data.map(el=>(<BasketProduct key={el.id} {...el}/>))} </>
  


  return (
    <>
      <div onClick={handleOpen} className="icon icon__last">
        <Circle amount={0} />
        <AiOutlineShoppingCart size="28" />
      </div>
      <div className={`basket ${open && 'basket__active'}`}>
      <div className='basket__context' >
      <h4 className='basket__subTitle'>Wartość twoje zamówienia</h4>
      <span className='basket__amount'>(Ilość produktów:1)</span>
      <span className='basket__price'>2000,00 $</span> 
      <DarkButton ><Link to='/order'>Zobacz koszyk</Link></DarkButton>  
      </div>
       <div className='basket__products '>
       {renderBasket}
       </div>
  
      <DarkButton ><Link to='/'>Przejdz do kasy</Link></DarkButton>
      </div>
    </>
  );
};
