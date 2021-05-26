import React, { FC, ReactNode, useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "./style/slider.scss";
import { Icons } from "components/common";
const { ArrowLeft, ArrowRight } = Icons;
interface ISlider {
  children: ReactNode;
  disable?:boolean;
}

export const ResponsiveSlider: FC<ISlider> = ({ children,disable }) => {
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const [state, setState] = useState<{
    nav1: Slider | undefined;
    nav2: Slider | undefined;
  }>({
    nav1: undefined,
    nav2: undefined,
  });

  useEffect(() => {
    if (slider1.current !== null && slider2.current) {
      setState({
        nav1: slider1.current,
        nav2: slider2.current,
      });
    }
  }, []);
  const { nav1, nav2 } = state;

  const SlickArrowPrew = ({ currentSlide, slideCount, ...props }: any) => {
    return (
      <button
        {...props}
        className={
          "slick-prev slick-arrow" +
          (currentSlide === 0 ? " slick-disabled" : "")
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
          "slick-next slick-arrow" +
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
    <div>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (slider1.current = slider)}
        prevArrow={<SlickArrowPrew />}
        nextArrow={<SlickArrowNext />}
      >
        {children}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2.current = slider)}
        focusOnSelect={true}
        slidesToShow={3}
        swipeToSlide={true}
        arrows={false}
        className={`${disable && 'disable'} `}
      >
        {children}
      </Slider>
    </div>
  );
};
