import { FC } from "react";
import { Link } from "react-router-dom";
import { ReadMore } from "components/common";

export const Help: FC = () => {
  return (
    <ReadMore title="Help" className='footerReadMore'>
      <ul className="footer__subList">
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            Payments
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            Shipping
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            Concellation
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            FAQ
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            Report Infringement
          </Link>
        </li>
      </ul>
    </ReadMore>
  );
};
