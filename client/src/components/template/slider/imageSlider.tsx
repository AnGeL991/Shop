import { FC } from "react";
import { useChangeSlider, useModalLogic } from "_hooks";
import { Icons } from "components/common";
import { ModalGalery } from "components/template";
import "./style/imageSlider.scss";
const { ArrowLeft, ArrowRight } = Icons;

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
  classSlide = "images__slide",
  big,
}) => {
  const {
    slide: { transition, translate, activeIndex },
    nextSlide,
    prevSlide,
  } = useChangeSlider(data, duration);
  const { showModal, handleToggleModal } = useModalLogic();

  const images = data.map((el, index) => (
    <div
      key={index}
      className={`${classSlide}`}
      style={{
        transform: `translate(-${translate}%)`,
        transition: `all linear  ${transition}s`,
        opacity: `${opacity}`,
      }}
    >
      <img src={el} alt="images" className={classImage} />
    </div>
  ));

  const foto = data.find((el, index) => index === activeIndex);

  const bigImage = (
    <div className="images__bigImage" onClick={handleToggleModal}>
      <img src={foto} alt="product images" className="images__bigImg" />
    </div>
  );
  return (
    <>
      <ModalGalery
        {...{
          img: data[0],
          images: data,
          handleToggle: handleToggleModal,
          showModal,
        }}
      />
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
    </>
  );
};
