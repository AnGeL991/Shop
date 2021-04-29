import { FC } from "react";

type Props = {
  image: string;
  translate: number;
  transition?: number;
  className?:string;
};

export const Slide: FC<Props> = ({ image, translate, transition,className='galerySlider' }) => {
  return (
    <div
      className={`${className}__imageBox`}
      style={{
        transform: `translate(-${translate}%)`,
        transition: `all linear  ${transition}s`,
      }}
    >
      <img className={`${className}__img`} src={image} alt="galeryFoto" />
    </div>
  );
};
