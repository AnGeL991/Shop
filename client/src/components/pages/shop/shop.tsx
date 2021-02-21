import {FC} from 'react';
import {Header} from 'components/common';
import {Filter,ProductCart} from 'components/features';


export const Shop:FC=()=>{
  return (
    <section className='page'>
      <Header title='Shop'/>
      <ProductCart/>
      <Filter/>
    </section>
  )
}