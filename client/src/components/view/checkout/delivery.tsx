import {FC} from 'react';
import {ProgressList,AdressForm} from 'components/template';

export const Delivery:FC =()=>{

    return (
        <section className='page'>
           <ProgressList active={2}/>
           <AdressForm/>
        </section>
    )
}