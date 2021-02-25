import { FC } from 'react';
import { useChangeSlider } from '_hooks';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { brands } from 'db/db';
import './brands.scss';

export const Brands: FC = () => {
  const { slide, nextSlide, prevSlide } = useChangeSlider(brands, 1);
  const { translate, transition } = slide;

  const brand = brands.map((el) => (
    <div
      key={el.id}
      className="brands__slide"
      style={{
        transform: `translate(-${translate}%)`,
        transition: `all linear  ${transition}s`,
      }}
    >
      <img src={el.image} alt="brands" />
    </div>
  ));

  return (
    <section className="brands">
      <div
        className="brands__wrapper"
        style={{ width: `${brands.length * 100}%` }}
      >
        {brand}
        <div className="brands__arrow">
          <IoIosArrowBack className="brands__icon" onClick={prevSlide} />
          <IoIosArrowForward className="brands__icon" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};
