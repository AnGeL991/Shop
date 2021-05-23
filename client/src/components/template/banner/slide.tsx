import { FC, useEffect } from "react";
import { IBanner } from "components/interfaces";
import { animation } from "./gsap";
import { Link } from "react-router-dom";

interface SlideProps extends IBanner {
  subTitle: string;
  buttons: Array<string>;
  index: number;
  active: number;
}

export const Slide: FC<SlideProps> = ({
  image,
  title,
  subTitle,
  description,
  buttons,
  index,
  active,
}) => {
  useEffect(() => {
    if (index === active && window.innerWidth >= 768) {
       animation();
    }
  }, [index, active]);

  const button = buttons.map((el) => (
    <button key={el} className={`slide__${el}`}>
      <Link to="/">{el}</Link>
    </button>
  ));
  return (
    <div className={`slide ${index === active && "slide--active"} `}>
      <div className="slide__image">
        <img className="slide__img" src={image} alt={title} />
        <div className="slide__wrapper">
          <h3 className="slide__title">{title}</h3>
          <h3 className="slide__subTitle">
            <strong>{subTitle}</strong>
          </h3>
          <span className="slide__description">{description}</span>
          {button}
        </div>
      </div>
    </div>
  );
};
