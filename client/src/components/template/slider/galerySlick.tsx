import React, { FC } from "react";
import Slider from "react-slick";
import { Slide } from "./slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/slider.scss";
import "./style/galerySlider.scss";
interface IGalery {
  data: Array<{ id: number; image: string }>;
  className?: string;
  arrows?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  initialSlide?: number;
}

export const GalerySlick: FC<IGalery> = ({
  data,
  className,
  arrows,
  slidesToShow = 1,
  slidesToScroll = 1,
  initialSlide = 0,
}) => {
  const fotos = data.map((el) => (
    <Slide key={el.id} image={el.image} className={className} />
  ));

  const settings = {
    speed: 500,
    slidesToShow,
    slidesToScroll,
    initialSlide,
    arrows,
    dots: true,
  };

  return (
    <section className="galerySlider">
      <Slider {...settings}>{fotos}</Slider>
    </section>
  );
};
