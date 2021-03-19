import { FC } from 'react';
import { ReadMore } from 'components/common';
import { Link } from 'react-router-dom';

export const Policy: FC = () => {
  return (
    <ReadMore title="Policy">
      <ul className="footer__subList">
        <li className="footer__eachSubList">
          <Link to="/policy" className="footer__link">
            Return Policy
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/terms" className="footer__link">
            Terms Of Use
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/security" className="footer__link">
            Security
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/privacy" className="footer__link">
            Privacy
          </Link>
        </li>
        <li className="footer__eachSubList">
          <Link to="/" className="footer__link">
            SiteMap
          </Link>
        </li>
      </ul>
    </ReadMore>
  );
};
