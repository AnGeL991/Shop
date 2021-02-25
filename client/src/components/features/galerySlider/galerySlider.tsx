import { FC } from 'react';
import { Slide } from './subComponent/slide';
import { Dots } from 'components/common';
import { useChangeSlider } from '_hooks/useChangeSlider';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import './galerySlider.scss';

type Props = {
  data: Array<{ id: number; image: string }>;
  arrows?: boolean;
  padding?: number;
  duration?: number;
};
export const GalerySlider: FC<Props> = ({
  data,
  arrows,
  padding,
  duration,
}) => {
  const { slide, nextSlide, prevSlide, handleClick } = useChangeSlider(
    data,
    duration
  );

  const fotos = data.map((el) => (
    <Slide
      key={el.id}
      image={el.image}
      translate={slide.translate}
      transition={slide.transition}
    />
  ));

  const Arrows = arrows ? (
    <div className="galerySlider__arrowBox">
      <RiArrowLeftSLine className="galerySlider__icon" onClick={prevSlide} />
      <RiArrowRightSLine
        className="galerySlider__icon"
        style={{ right: '0px' }}
        onClick={nextSlide}
      />
    </div>
  ) : null;

  return (
    <section className="galerySlider" style={{ padding: `${padding}px` }}>
      <div className="galerySlider__content">
        <div
          className="galerySlider__wrapper"
          style={{ width: `${data.length * 100}%` }}
        >
          {fotos}
        </div>
        {Arrows}
      </div>
      <Dots data={data} activeIndex={slide.activeIndex} onClick={handleClick} />
    </section>
  );
};
