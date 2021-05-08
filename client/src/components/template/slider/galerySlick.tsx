import React, { FC } from "react";
import Slider from "react-slick";
import { Slide } from "./slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/slider.scss";

interface IGalery {
  data: Array<{ id: number; image: string }>;
  className?: string;
  arrows?: boolean;
}

export const GalerySlick: FC<IGalery> = ({ data, className, arrows }) => {
  const fotos = data.map((el) => (
    <Slide key={el.id} image={el.image} className={className} />
  ));

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows,
    dots: true,
  };

  return <Slider {...settings}>{fotos}</Slider>;
};
