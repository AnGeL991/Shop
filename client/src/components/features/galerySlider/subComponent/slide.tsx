import { FC } from 'react';

type Props = {
  image: string;
  translate: number;
  transition?: number;
};

export const Slide: FC<Props> = ({ image, translate, transition }) => {
  return (
    <div
      className="galerySlider__imageBox"
      style={{
        transform: `translate(-${translate}%)`,
        transition: `all linear  ${transition}s`,
      }}
    >
      <img className="galerySlider__img" src={image} alt="galeryFoto" />
    </div>
  );
};
