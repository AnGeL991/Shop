import { FC, ReactNode } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import '../carousel/carousel.scss';

type Props = {
  title: string;
  children: ReactNode;
  next: () => void;
  prev: () => void;
  length?: number;
};

export const Carousell: FC<Props> = ({
  title,
  children,
  next,
  prev,
  length,
}) => {
  return (
    <section className="carousel">
      <header className="carousel__header">
        <h1 className="carousel__title">{title}</h1>
        <MdKeyboardArrowLeft size="24" onClick={prev} />
        <MdKeyboardArrowRight size="24" onClick={next} />
      </header>
      <div
        className="carousel__slide"
        style={{ width: `${(length ? length : 1) * 100}%` }}
      >
        {children}
      </div>
    </section>
  );
};
