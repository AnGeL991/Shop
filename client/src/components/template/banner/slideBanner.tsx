import { FC, useState, useEffect, useMemo } from "react";
import { Slide } from "./subComponent/slide";
import { mainBaner } from "db";
import "./banner.scss";

export const SlideBanner: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 0) {
        setActiveIndex(1);
      } else setActiveIndex(0);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const slides = useMemo(
    () =>
      mainBaner.map((el) => <Slide key={el.id} {...el} index={activeIndex} />),
    [activeIndex]
  );

  return <section className="slider">{slides}</section>;
};
