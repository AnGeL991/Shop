import { FC } from "react";
import {SVG} from 'svg';

export const CopyRight: FC = () => {
  const {AWS,STRIPE,FACEBOOK,TELEGRAM} = SVG;
  return (
    <div className="copyRight">
      <p>
        Copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2021
      </p>
      <div className="copyRight__images">
        <img src={AWS} alt="aws logo" className="copyRight__logo" />
        <img src={STRIPE} alt="aws logo" className="copyRight__name" />
        <img src={FACEBOOK} alt="aws logo" className="copyRight__name" />
        <img src={TELEGRAM} alt="aws logo" className="copyRight__name" />
      </div>
    </div>
  );
};
