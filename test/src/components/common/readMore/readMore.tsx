import {FunctionComponent,useState,MouseEvent,ReactNode, CSSProperties} from 'react';
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from 'react-icons/md';
import './readMore.scss';

type Props ={
  title: string,
  children: ReactNode,
  className?: string,
  style?:CSSProperties,
}

export const ReadMore:FunctionComponent<Props>=({title,children,className='readMore',style})=>{
  
  const [isOpen,setIsOpen] =useState(false);

  const handleClick =(e:MouseEvent<HTMLDivElement>)=>{
    setIsOpen(prev=>!prev)
  }
  const arrow = !isOpen ? <MdKeyboardArrowDown className={`${className}__icon`} /> :<MdKeyboardArrowUp className={`${className}__icon`}/>

  return (
    <div className={className} style={style} >
      <div className={`${className}__title`} onClick={handleClick}>
        <p>{title}</p>
        <span>{arrow}</span>
      </div>
      <div className={isOpen ? `${className}__show`: `${className}__hide`}>
        {children}
      </div>
    </div>
  )
}