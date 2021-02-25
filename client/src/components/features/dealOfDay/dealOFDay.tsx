import { FC } from 'react';
import { Carousell } from 'components/features';
import { useChangeSlider } from '_hooks';
import { Slide } from './subComponent/dealProduct';
import './style.scss';

export const DealOfDay: FC = () => {
  const data = [
    {
      _id: '1',
      title: 'Similique sunt in culpa',
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
      price: 50.0,
      category: 'test',
      description:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod quaerat quo eveniet. Dolores quis saepe cum explicabo iste neque animi!',
      star: 3,
      amount: 1,
    },
    {
      _id: '2',
      title: 'Laborum et Dolorum Fug',
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
      price: 150.0,
      category: 'test',
      description:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod quaerat quo eveniet. Dolores quis saepe cum explicabo iste neque animi!',
      star: 4,
      amount: 1,
    },
    {
      _id: '3',
      title: 'Laborum et Dolorum Fug',
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
      price: 1000.0,
      category: 'test',
      description:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elitDicta quodquaerat quo eveniet. Dolores quis saepe cum explicabo iste neque animi!',
      star: 1,
      amount: 1,
    },
    {
      _id: '4',
      title: 'Laborum et Dolorum Fug',
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
      price: 30.0,
      category: 'test',
      description:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod quaerat quo eveniet. Dolores quis saepe cum explicabo iste neque animi!',
      star: 5,
      amount: 1,
    },
  ];

  const dataFoto = [
    {
      id: 0,
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
    },
    {
      id: 1,
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
    },
    {
      id: 2,
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
    },
  ];

  const { slide, nextSlide, prevSlide } = useChangeSlider(data);

  const slides = data.map((el) => (
    <Slide
      key={el._id}
      data={dataFoto}
      transition={slide.transition}
      translate={slide.translate}
      {...el}
    />
  ));

  return (
    <section>
      <Carousell
        title="Deal of the day"
        next={nextSlide}
        prev={prevSlide}
        length={data.length}
      >
        {slides}
      </Carousell>
    </section>
  );
};
