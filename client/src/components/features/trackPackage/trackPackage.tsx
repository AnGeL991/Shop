import { FC } from 'react';
import './trackPackage.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowRight, BsCheckBox } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

export const TrackPackage: FC = () => {
  return (
    <section className="track">
      <div className="track__icons">
        <AiOutlineShoppingCart className="track__icon" />
        <BsArrowRight className="track__icon" />
        <BsCheckBox className="track__icon" />
        <BsArrowRight className="track__icon" />
        <FaHome className="track__icon" />
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
