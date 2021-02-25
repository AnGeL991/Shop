import { FC } from 'react';
import { Carousell } from 'components/features';
import { ProductBox } from 'components/common';
import { useChangeSlider } from '_hooks';

export const RecomendetProduct: FC = () => {
  const data = [
    {
      _id: '1',
      title: 'Similique sunt in culpa',
      image:
        'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
      price: 150.0,
      category: 'test',
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
      star: 5,
      amount: 1,
    },
  ];

  const { slide, nextSlide, prevSlide } = useChangeSlider(data);

  const arrayOfProduct = data.map((el) => (
    <div
      key={el._id}
      className="carousel__item"
      style={{
        transform: `translateX(-${slide.translate}%)`,
      }}
    >
      <ProductBox item={el} />
    </div>
  ));

  return (
    <section>
      <Carousell
        length={data.length}
        title="Recomended Products"
        next={nextSlide}
        prev={prevSlide}
      >
        {arrayOfProduct}
      </Carousell>
    </section>
  );
};
