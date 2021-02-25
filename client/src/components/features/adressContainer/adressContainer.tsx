import { FC } from 'react';
import './adressContainer.scss';
import { GoLocation } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

export const AdressContainer: FC = () => {
  return (
    <div className="adress">
      <div className="adress__text">
        <GoLocation className="adress__icon" />
        <div className="adress__info">
          <h4 className="adress__title">Address:</h4>
          <p className="adress__description">
            Bohaterów Modlina 32 <br /> 05-100 Nowy Dwór Mazowiecki
          </p>
        </div>
      </div>
      <div className="adress__text">
        <FiPhone className="adress__icon" />
        <div className="adress__info">
          <h4 className="adress__title">Phone:</h4>
          <p className="adress__description">+48 321 231 534</p>
        </div>
      </div>
      <div className="adress__text">
        <AiOutlineMail className="adress__icon" />
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
