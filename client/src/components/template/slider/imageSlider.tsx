import { FC } from "react";
import { Icons } from "components/common";
import { useChangeImage } from "_hooks";
import "./style/imageSlider.scss";
const { ArrowLeft, ArrowRight } = Icons;
interface IImageSlider {
  images: Array<string>;
}

export const ImageSlider: FC<IImageSlider> = ({ images }) => {
  const { slide, nextSlide, prevSlide } = useChangeImage(images);
  const otherImages = slide.map((el, index) => (
    <img key={index} src={el} alt="foto" className="images__eachFoto" />
  ));

  const arrows = (
    <div className="images__arrows">
      <div className="images__left">
        <ArrowLeft className="images__icon" onClick={prevSlide} />
      </div>
      <div className="images__right">
        <ArrowRight className="images__icon" onClick={nextSlide} />
      </div>
    </div>
  );

  return (
    <div className="images">
      <div className="images__wrapper">
        <div className="images__imageBox">
          <img src={slide[1]} alt="foto" className="images__img" />
          {arrows}
        </div>
      </div>
      <div className="images__box">
        <div className="images__border"></div>
        <div className="images__slider">{otherImages}</div>
        {arrows}
      </div>
    </div>
  );
};
