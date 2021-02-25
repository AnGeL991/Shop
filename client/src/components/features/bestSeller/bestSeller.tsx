import { FC } from 'react';
import { Carousell } from 'components/features';
import { ProductBox } from 'components/common';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'store/index';
import { useChangeSlider } from '_hooks';

export const BestSeller: FC = () => {
  const data = useSelector((state: ApplicationState) => state.inventory.data);

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
        next={nextSlide}
        prev={prevSlide}
        title="BestSeller Products"
        length={data.length}
      >
        {arrayOfProduct}
      </Carousell>
    </section>
  );
};
