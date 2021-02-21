import {FC, ReactNode} from 'react';
import './darkButton.scss';


type Props = {
  children: ReactNode,
  onClick?:()=> void;
}

export const DarkButton:FC<Props> =({children,onClick})=>{

  return (
    <button onClick={onClick} className='darkButton'>{children}</button>
  )
}