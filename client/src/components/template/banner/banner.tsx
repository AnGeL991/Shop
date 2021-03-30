import { FC } from "react";
import { IBanner } from "components/interfaces";
import { Link } from "react-router-dom";
import "./banner.scss";

export const Banner: FC<IBanner> = ({ image, title, description, button }) => {
  return (
    <div className="banner">
      <div className="banner__image">
        <img src={image} alt={title} className="banner__img" />
        <div className="banner__wrapper">
          <h4 className="banner__title">{title}</h4>
          <span className="banner__description">{description}</span>
          <button className="banner__button">
            <Link to="/shop">{button}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
