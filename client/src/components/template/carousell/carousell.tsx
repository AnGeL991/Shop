import { FC, ReactNode } from "react";
import { CarouselSlider } from "components/template";
import "./style/carousell.scss";

interface ICarousell {
  title: string;
  children: ReactNode;
  deal?: boolean;
}

export const Carousell: FC<ICarousell> = ({ title, children, deal }) => {
  return (
    <section className="carousel">
      <header className="carousel__header">
        <h1 className="carousel__title">{title}</h1>
      </header>
      <CarouselSlider {...{ deal }}>{children}</CarouselSlider>
    </section>
  );
};
