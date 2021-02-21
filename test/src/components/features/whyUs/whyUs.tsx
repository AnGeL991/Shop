import {FC} from 'react';
import {EachBox} from './subComponent/eachBox';
import { BiShoppingBag } from 'react-icons/bi';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCube } from 'react-icons/fa';
import './whyUs.scss';


const data =[
  {
    children:<BiShoppingBag className='whyUs__icon'/>,
    title:'Easy to buy',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!'
},
{
  children:<IoChatbubblesOutline className='whyUs__icon'/>,
  title:'outstanding support ',
  description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!'
},
{
  children:<AiOutlineHeart className='whyUs__icon'/>,
  title:'Simply beautiful ',
  description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!'
},
{
  children:<FaCube className='whyUs__icon'/>,
  title:'careful crafted',
  description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!'
},
]


export const WhyUs:FC =()=>{

  const items =data.map((el,index)=>(<EachBox key={index} {...el}>{el.children}</EachBox>))
  
  return(
  <section className='whyUs'>
    <h4 className='whyUs__title'>Why Us</h4>
    {items}
  </section>)
}