import { FC } from "react";
import { useChangeSlider } from "_hooks";
import { Icons } from "components/common";
import "./imageSlider.scss";
type ImageProps = {
  data: Array<{ id: number; image: string }>;
  className?: string;
  classImage?: string;
  classSlide?: string;
  duration?: number;
  opacity?: number;
};

export const ImageSlider: FC<ImageProps> = ({
  data,
  className,
  duration,
  classImage,
  opacity,
  classSlide,
}) => {
  const { slide, nextSlide, prevSlide } = useChangeSlider(data, duration);
  const { transition, translate } = slide;
  const { ArrowLeft, ArrowRight } = Icons;
  const images = data.map((el) => (
    <div
      key={el.id}
      className={`images__slide ${classSlide} `}
      style={{
        transform: `translate(-${translate}%)`,
        transition: `all linear  ${transition}s`,
        opacity: `${opacity}`,
      }}
    >
      <img src={el.image} alt="images" className={classImage} />
    </div>
  ));
  return (
    <section className={`images ${className}`}>
      <div
        className="images__wrapper"
        style={{ width: `${data.length * 100}%` }}
      >
        {images}
        <div className="images__arrow">
          <ArrowLeft className="images__icon" onClick={prevSlide} />
          <ArrowRight className="images__icon" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};
