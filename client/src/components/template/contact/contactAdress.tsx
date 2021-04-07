import { FC } from "react";
import { Icons } from "components/common";
import './style/contactAdress.scss';

export const AdressContainer: FC = () => {
  const { Adress, Phone, Email } = Icons;

  return (
    <div className="adress">
      <div className="adress__text">
        <Adress className="adress__icon" />
        <div className="adress__info">
          <h4 className="adress__title">Address:</h4>
          <p className="adress__description">
            Bohaterów Modlina 32 <br /> 05-100 Nowy Dwór Mazowiecki
          </p>
        </div>
      </div>
      <div className="adress__text">
        <Phone className="adress__icon" />
        <div className="adress__info">
          <h4 className="adress__title">Phone:</h4>
          <p className="adress__description">+48 321 231 534</p>
        </div>
      </div>
      <div className="adress__text">
        <Email className="adress__icon" />
        <div className="adress__info">
          <h4 className="adress__title">Email:</h4>
          <a href="mailto: demo@example.com" className="adress__link">
            demo@example.com
          </a>
          <p className="adress__description">Monday - Friday 10 AM - 8 PM</p>
        </div>
      </div>
    </div>
  );
};
