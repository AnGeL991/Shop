import {FC } from 'react';
import { ProductSecurity, OrderProduct } from 'components/features';
import { DarkButton, Header } from 'components/common';
import { Link } from 'react-router-dom';
import './order.scss';


export const Order: FC = () => {

  return (
    <section className='page'>
      <Header title='Basket' />
      <OrderProduct />
      <ProductSecurity />
      <div className='order__basketBox'>
        <DarkButton><Link to='/shop'>return to Shop</Link></DarkButton>
      </div>
    </section>
  )
}


