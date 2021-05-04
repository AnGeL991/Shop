import { FC } from "react";
import { useChangeSlider } from "_hooks";
import { Icons } from "components/common";
import "./style/brandSlider.scss";
const { ArrowLeft, ArrowRight } = Icons;

interface IBrandSlider {
  data: Array<string>;
  className?: string;
  classImage?: string;
  classSlide?: string;
  duration?: number;
  opacity?: number;
  big?: boolean;
}

export const BrandSlider: FC<IBrandSlider> = ({
  data,
  className,
  duration,
  classImage,
  opacity,
  classSlide = "brands__slide",
  big,
}) => {
  const {
    slide: { transition, translate },

    nextSlide,
    prevSlide,
  } = useChangeSlider(data, duration);

  const brands = data.map((el, index) => (
    <div
      key={index}
      className={`${classSlide}`}
      style={{
        transform: `translate(-${translate}%)`,
        transition: `all linear  ${transition}s`,
        opacity: `${opacity}`,
      }}
    >
      <img src={el} alt="brands" className={classImage} />
    </div>
  ));
  return (
    <>
      <section className={`brands ${className}`}>
        <div className="brands__box">
          <div
            className="brands__wrapper"
            style={{ width: `${data.length * 100}%` }}
          >
            {brands}
            <div className="brands__arrow">
              <ArrowLeft className="brands__icon" onClick={prevSlide} />
              <ArrowRight className="brands__icon" onClick={nextSlide} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
