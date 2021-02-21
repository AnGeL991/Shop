import { FunctionComponent } from 'react';
import {ReadMore} from 'components/common';
import { GoLocation } from 'react-icons/go';
import { GiLetterBomb } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';

export const Contact:FunctionComponent=()=>{
  return(
    <ReadMore title="Contact Us">
    <ul className="footer__subList">
      <li className="footer__eachSubList">
        <GoLocation size="28" />
        <p className="footer__text">
          Bohaterów Modlina 32 <br /> 05-100 Nowy Dwór Mazowiecki
        </p>
      </li>
      <li className="footer__eachSubList">
        <GiLetterBomb size="28" />
        <p className="footer__text">(+00) 543-123-321</p>
      </li>
      <li className="footer__eachSubList">
        <BiSupport size="28" />{' '}
        <p className="footer__text">demo@example.com</p>
      </li>
    </ul>
  </ReadMore>
  )
}