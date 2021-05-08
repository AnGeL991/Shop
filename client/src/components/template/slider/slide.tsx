import { FC } from "react";

type Props = {
  image: string;
  className?: string;
};

export const Slide: FC<Props> = ({ image, className = "galerySlider" }) => {
  return (
    <div className={`${className}__imageBox`}>
      <img className={`${className}__img`} src={image} alt="galeryFoto" />
    </div>
  );
};
