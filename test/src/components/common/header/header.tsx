import {FC} from 'react';
import './header.scss';

type Props ={
  title:string,
}

export const Header:FC<Props> =({title})=>{

  return(
    <header className='headerPage'>
      <h3 className='headerPage__title'>{title}</h3>
    </header>
  )
}