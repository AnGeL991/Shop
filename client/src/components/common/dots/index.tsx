import { FC, MouseEvent, useMemo } from "react";
import "./style/dots.scss";

type DotsProps = {
  data: Array<{ id: number }>;
  className?:string;
  activeIndex?: number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Dots: FC<DotsProps> = ({ data, className,activeIndex, onClick }) => {
  
  const dot = useMemo(
    () =>
      data.map((el, index) => (
        <li key={el.id} className='dots__dot'>
          <button
            className={`dots__item ${className} ${
              activeIndex === index ? "dots__active" : null
            }`}
            value={el.id}
            onClick={onClick}
          >
            {el.id}
          </button>
        </li>
      )),
    [data, activeIndex, onClick,className]
  );

  return <ul className="dots">{dot}</ul>;
};
