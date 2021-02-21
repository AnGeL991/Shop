import {FC} from 'react';
import { Carousel } from '../carousel/carousel';

export const DealOfDay:FC=()=>{

  const data = [
    {
      id:1,
      title:'Similique sunt in culpa',
      image:'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
      price:'150.00',
      star:3
    }
    ,{
      id:2,
      title:'Laborum et Dolorum Fug',
      image:'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
      price:'150.00',
      star:4
    },
    {
      id:3,
      title:'Laborum et Dolorum Fug',
      image:'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
      price:'1000.00',
      star:1
    },
    {
      id:4,
      title:'Laborum et Dolorum Fug',
      image:'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
      price:'30.00',
      star:5
    }
  ]
  
  return (
    <section>
      <Carousel title='Deal of the day' slides={data} showAmountItem={1} />
    </section>
  )
}