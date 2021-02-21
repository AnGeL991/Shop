import {FC} from 'react';
import {Header} from 'components/common';
import {Galery} from 'components/features';

export const Media:FC =()=>{
  return<section className='page'>
    <Header title='Media'/>
    <Galery/>
  </section>
}