import { FC, useState, useEffect,useMemo } from 'react';
import { Slide } from './subComponent/slide';
import './banner.scss';

export const SlideBanner: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: 1,
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/main-banner-2.jpg',
      title: 'Summer Sale!',
      subTitle: 'Trumblers cups & ceramic',
      description: 'Understand introductions to ceramic materials',
      buttons: ['shop', 'now'],
    },
    {
      id: 2,
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Main-banner-01.jpg',
      title: 'Summer Sale!',
      subTitle: 'Trumblers cups & ceramic',
      description: 'Understand introductions to ceramic materials',
      buttons: ['shop now'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 0) {
        setActiveIndex(1);
      } else setActiveIndex(0);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const slides = useMemo(()=>
   data.map((el) => (
    <Slide key={el.id} {...el} index={activeIndex} />
  )),[data]) 

  return <section className="slider">{slides}</section>;
};
