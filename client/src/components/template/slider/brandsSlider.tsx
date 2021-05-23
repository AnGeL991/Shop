import { FC } from "react";
import Slick from "react-slick";
import { brands } from "db";
import { Icons } from "components/common";
import "./style/brandSlider.scss";
const { ArrowLeft, ArrowRight } = Icons;

export const BrandSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          autoplay:false
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
        breakpoint: 768,
        settings: {
          autoplay:true
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          Infinity: true,
        },
      },
    ],
  };
  const SlickArrowPrew = ({ currentSlide, slideCount, ...props }: any) => {
    return (
      <button
        {...props}
        className={
          "brands__prev arrow" + (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        <ArrowLeft className="brands__icon" />
      </button>
    );
  };
  const SlickArrowNext = ({ currentSlide, slideCount, ...props }: any) => {
    return (
      <button
        {...props}
        className={
          "brands__next " +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        <ArrowRight className="brands__icon" />
      </button>
    );
  };

  const data = brands.map((el, index) => (
    <div key={index} className="brands__slide">
      <img src={el} alt="brands" />
    </div>
  ));

  return (
    <section className="brands">
      <Slick
        {...settings}
        prevArrow={<SlickArrowPrew />}
        nextArrow={<SlickArrowNext />}
      >
        {data}
      </Slick>
    </section>
  );
};
