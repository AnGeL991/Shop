import {FC} from 'react';
import {EachData} from './subComponent/eachData';
import './personalData.scss';


export const PersonalData:FC =()=>{

  return (
    <section className='personalData'>
      <EachData/>
    </section>
  )
}