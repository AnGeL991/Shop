import { FC } from "react";
import { Link } from "react-router-dom";
import { ReadMore } from "components/template";


export const AboutUs: FC = () => {
  return (
    <ReadMore title="About" className='footerReadMore'>
      <ul className="footer__subList">
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            Contact Us
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            About Us
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            Careers
          </Link>
        </li>
      </ul>
    </ReadMore>
  );
};
