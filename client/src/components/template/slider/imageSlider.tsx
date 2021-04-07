import { FC, useMemo } from "react";
import { useChangeSlider } from "_hooks";
import { Icons } from "components/common";
import "./style/imageSlider.scss";

type ImageProps = {
  data: Array<string>;
  className?: string;
  classImage?: string;
  classSlide?: string;
  duration?: number;
  opacity?: number;
  big?: boolean;
};

export const ImageSlider: FC<ImageProps> = ({
  data,
  className,
  duration,
  classImage,
  opacity,
  classSlide,
  big,
}) => {
  const { slide, nextSlide, prevSlide } = useChangeSlider(data, duration);
  const { transition, translate } = slide;
  const { ArrowLeft, ArrowRight } = Icons;

  const images = useMemo(
    () =>
      data.map((el, index) => (
        <div
          key={index}
          className={`images__slide ${classSlide} `}
          style={{
            transform: `translate(-${translate}%)`,
            transition: `all linear  ${transition}s`,
            opacity: `${opacity}`,
          }}
        >
          <img src={el} alt="images" className={classImage} />
        </div>
      )),
    [translate, transition, classImage, classSlide, data, opacity]
  );
  const foto = data.filter((el, index) => index === slide.activeIndex);

  const bigImage = (
    <div className="images__bigImage">
      <img src={foto[0]} alt="product images" className="images__bigImg" />
    </div>
  );
  return (
    <section className={`images ${className}`}>
      {big && bigImage}
      <div className="images__box">
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
      </div>
    </section>
  );
};
