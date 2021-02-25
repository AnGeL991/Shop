import { FunctionComponent } from 'react';
import { ReadMore } from 'components/common';
import { Link } from 'react-router-dom';

export const AboutUs: FunctionComponent = () => {
  return (
    <ReadMore title="About">
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
