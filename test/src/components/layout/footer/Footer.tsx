import {FunctionComponent} from 'react';
import './footer.scss';
import {List,CopyRight} from 'components/features'

export const Footer:FunctionComponent =()=>{
  return (
    <section className='footer' >
      <List/>
      <CopyRight/>
    </section>
  )
}