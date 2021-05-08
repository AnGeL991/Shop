import { FC, ReactNode } from "react";
import Slick from "react-slick";
import { Icons } from "components/common";
import "./style/slideCarousel.scss";
const { ArrowLeft, ArrowRight } = Icons;

interface ICarouselSlider {
  children: ReactNode;
  deal?: boolean;
}

export const CarouselSlider: FC<ICarouselSlider> = ({ children, deal }) => {
  const dealSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    Infinity: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          Infinity: true,
        },
      },
    ],
  };
  const slickConfig = deal ? dealSettings : settings;

  const SlickArrowPrew = ({ currentSlide, slideCount, ...props }: any) => {
    return (
      <button
        {...props}
        className={
          "arrow__prev arrow " + (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        <ArrowLeft className="arrowIcon" />
      </button>
    );
  };
  const SlickArrowNext = ({ currentSlide, slideCount, ...props }: any) => {
    return (
      <button
        {...props}
        className={
          "arrow__next arrow " +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        <ArrowRight className="arrowIcon" />
      </button>
    );
  };

  return (
    <Slick
      {...slickConfig}
      prevArrow={<SlickArrowPrew />}
      nextArrow={<SlickArrowNext />}
    >
      {children}
    </Slick>
  );
};
