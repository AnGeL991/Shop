import { FC } from 'react';
import { Slide } from './subComponent/slide';
import { useChangeSlider } from '_hooks/useChangeSlider';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import './galerySlider.scss';

const data = [
  {
    id: 0,
    image:
      'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg',
  },
  {
    id: 1,
    image:
      'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg',
  },
  {
    id: 2,
    image:
      'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg',
  },
];

export const GalerySlider: FC = () => {

  const { slide, nextSlide, prevSlide, handleClick } = useChangeSlider(data,2);

  const dots = data.map((el, index) => (
    <li key={el.id} className="galerySlider__dot">
      <button
        className={`galerySlider__item ${slide.activeIndex === index ? 'galerySlider__active' : null
          }`}
        value={el.id}
        onClick={handleClick}
      >
        {el.id}
      </button>
    </li>
  ));
  const fotos = data.map((el) => (
    <Slide key={el.id} image={el.image} translate={slide.translate} transition={slide.transition} />
  ));

  return (
    <section className="galerySlider">
      <div className="galerySlider__content">
        <div
          className="galerySlider__wrapper"
          style={{ width: `${data.length * 100}%` }}
        >
          {fotos}
        </div>
        <div className="galerySlider__arrowBox">
          <RiArrowLeftSLine
            className="galerySlider__icon"
            onClick={prevSlide}
          />
          <RiArrowRightSLine
            className="galerySlider__icon"
            style={{ right: '0px' }}
            onClick={nextSlide}
          />
        </div>
      </div>
      <ul className="galerySlider__dots">{dots}</ul>
    </section>
  );
};
