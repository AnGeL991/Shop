import { FC, useState, useEffect, useMemo } from "react";
import { Slide } from "./slide";
import { mainBaner } from "db";
import "./style/slider.scss";

export const SlideBanner: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 0) {
        setActiveIndex(1);
      } else setActiveIndex(0);
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const slides = useMemo(
    () =>
      mainBaner.map((el,index) => <Slide key={el.id} {...el} index={index} active={activeIndex} />),
    [activeIndex]
  );

  return <section className="slider">{slides}</section>;
};
