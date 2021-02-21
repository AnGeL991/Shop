import {FunctionComponent} from 'react';
import './banner.scss';

type Props ={
  image: string,
  title:string,
  description:string,
  button:string,
}

export const Banner:FunctionComponent<Props> =({image,title,description,button})=>{
  return (
    <div className='banner'>
      <div className='banner__image'>
        <img src={image} alt={title} className='banner__img'/>
        <div className='banner__wrapper'>
        <h4 className='banner__title'>{title}</h4>
        <span className='banner__description'>{description}</span>
        <button className='banner__button'>{button}</button>
        </div>
      </div>
    </div>
  )
}