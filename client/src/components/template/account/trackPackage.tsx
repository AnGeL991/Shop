import { FC } from "react";
import { Icons } from "components/common";


export const TrackPackage: FC = () => {
  const { ArrowRight, ShoppingCart, HomeIcon, CheckIcon } = Icons;
  
  return (
    <section className="track">
      <div className="track__icons">
        <ShoppingCart className="track__icon" />
        <ArrowRight className="track__icon" />
        <CheckIcon className="track__icon" />
        <ArrowRight className="track__icon" />
        <HomeIcon className="track__icon" />
      </div>
      <div className="track__number">
        <h3 className="track__title">number paczki</h3>
        <input
          type="text"
          className="track__input"
          placeholder="abc-234-dsa-432"
        />
      </div>
      <div className="track__info">
        <p className="track__status">Status przesyłki:</p>
        <strong>W magazynie</strong>
        <div className="track__description">
          Paczka jest przygotowywana dla firmy transportowej
        </div>
      </div>
    </section>
  );
};
