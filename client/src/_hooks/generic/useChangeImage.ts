import { useState, useEffect } from "react";

export const useChangeImage = (data: Array<string>) => {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState<Array<string>>([""]);
  useEffect(() => {
    console.log(active, data.length, "effect");
    if (active + 1 === data.length) {
      setSlide([data[active - 1], data[active], data[0]]);
    } else if (active === 0) {
      setSlide([data[data.length - 1], data[active], data[active + 1]]);
    } else if (active !== 0 && active + 1 !== data.length)
      setSlide([data[active - 1], data[active], data[active + 1]]);
  }, [active, data]);

  const nextSlide = () => {
    if (active + 1 === data.length) {
      setActive(0);
    } else setActive((prev) => prev + 1);
  };
  const prevSlide = () => {
    if (active === 0) {
      setActive(data.length - 1);
    } else setActive((prev) => prev - 1);
  };
  return { slide, nextSlide, prevSlide };
};
