import { FC } from 'react';
import {option,products} from 'db/db';
import {ProductBox} from 'components/common';
import {ProductDataPage} from 'components/features';
import './productCart.scss';


export const ProductCart: FC = () => {

  const options = option.map((el) => (
    <option key={el.name} value={el.name} >
      {el.text}
    </option>
  ));
    const productsToDisplay = products.map((el)=>(
      <ProductBox key={el.id} item={el} width={50}/>
    ))

  return (
    <section className="page">
      <div className="productCart__wrapper">
        <form>
          <select defaultValue='Default sorting' className="productCart__select">{options}</select>
        </form>
      </div>
      <div className="productCart__products">
       {productsToDisplay} 
        <ProductDataPage array={products} value={1}/> 
        </div>
    </section>
  );
};
