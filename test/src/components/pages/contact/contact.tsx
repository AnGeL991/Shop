import {FC} from 'react';
import {Header} from 'components/common';
import {ContactForm,AdressContainer,Map} from 'components/features';


export const Contact:FC=()=>{
  return (
  <section className='page'>
    <Header title='Contact Us'/>
    <Map/>
    <ContactForm/>
    <AdressContainer/>
  </section>
  )
}