import { FC, ReactNode } from "react";
import { Icons } from "components/common";
import "./style/carousell.scss";

interface ICarousell  {
  title: string;
  children: ReactNode;
  next: () => void;
  prev: () => void;
  length?: number;
};

export const Carousell: FC<ICarousell> = ({
  title,
  children,
  next,
  prev,
  length,
}) => {
  const { ArrowLeft, ArrowRight } = Icons;
  return (
    <section className="carousel">
      <header className="carousel__header">
        <h1 className="carousel__title">{title}</h1>
        <ArrowLeft size="24" onClick={prev} />
        <ArrowRight size="24" onClick={next} />
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
