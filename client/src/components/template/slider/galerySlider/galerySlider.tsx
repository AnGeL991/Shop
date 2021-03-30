import { FC } from "react";
import { Slide } from "./subComponent/slide";
import { Dots } from "components/common";
import { useChangeSlider } from "components/template/carousell/hooks/useChangeSlider";
import { Icons } from "components/common";
import "./galerySlider.scss";

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

  const { ArrowLeft, ArrowRight } = Icons;

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
      <ArrowLeft className="galerySlider__icon" onClick={prevSlide} />
      <ArrowRight
        className="galerySlider__icon"
        style={{ right: "0px" }}
        onClick={nextSlide}
      />
    </div>
  ) : null;

  const dots =
    data.length > 1 ? (
      <Dots data={data} activeIndex={slide.activeIndex} onClick={handleClick} />
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
      {dots}
    </section>
  );
};
