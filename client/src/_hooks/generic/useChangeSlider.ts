import { useState, MouseEvent, useEffect } from "react";
import { CarouselState } from "db/db";

export const useChangeSlider = (data: Array<{}>, autoPlay?: number) => {
  const firstSlide = data[0];
  const secundSlide = data[1];
  const lastSlide = data[data.length - 1];

  const [slide, setSlide] = useState<CarouselState>({
    activeIndex: 0,
    translate: 0,
    transition: 0,
    _slides: [lastSlide, firstSlide, secundSlide],
  });

  const { activeIndex } = slide;

  const nextSlide = () => {
    setSlide((prev) => ({
      ...prev,
      activeIndex: activeIndex === data.length - 1 ? 0 : activeIndex + 1,
      transition: activeIndex === data.length - 1 ? 0 : 0.5,
      translate:
        100 * (activeIndex + 1 > data.length - 1 ? 0 : activeIndex + 1),
    }));
  };
  const prevSlide = () => {
    setSlide((prev) => ({
      ...prev,
      activeIndex: activeIndex === 0 ? data.length - 1 : activeIndex - 1,
      transition: activeIndex === 0 ? 0 : 0.5,
      translate: 100 * (activeIndex === 0 ? data.length - 1 : activeIndex - 1),
    }));
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setSlide((prev) => ({
      ...prev,
      activeIndex: parseInt(value),
      translate: 100 * (parseInt(value) === data.length ? 1 : parseInt(value)),
    }));
  };
  useEffect(() => {
    let interval: any = null;
    if (autoPlay) {
      interval = setInterval(nextSlide, autoPlay * 1000);
    }
    return () => {
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  });
  return { slide, nextSlide, prevSlide, handleClick };
};
