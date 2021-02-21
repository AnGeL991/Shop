import {FC} from 'react';

type Props ={
  image:string,
  text:string,
}


export const EachFoto:FC<Props> =({image,text})=>{
  return (
  <div className='galery__foto' style={{backgroundImage:`url(${image})`}}>
    
    <div className='galery__bg'>
      <p className='galery__text'>{text}</p>
    </div>
  </div>
  )
}