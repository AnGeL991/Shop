import {FC} from 'react';
import {Header} from 'components/common';
import {WhyUs,GalerySlider} from 'components/features';
import './aboutUs.scss';

export const AboutUs:FC =()=>{

  return (
    <section className='page'>
      <Header title='About Us'/>
     <GalerySlider/>
      {/* <OurHistory/>  */}
     <WhyUs/>
    </section>
  )
}