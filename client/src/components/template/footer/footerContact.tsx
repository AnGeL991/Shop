import { FC } from "react";
import { Icons } from "components/common";
import { ReadMore } from "components/template";

export const Contact: FC = () => {
  const { Adress, LetterBomb, SupportIcon } = Icons;
  return (
    <ReadMore title="Contact Us" className="footerReadMore">
      <ul className="footer__subList">
        <li className="footer__eachSubList footer__eachSubList--contact">
          <Adress size="28" />
          <p className="footer__text">
            Bohaterów Modlina 32 <br /> 05-100 Nowy Dwór Mazowiecki
          </p>
        </li>
        <li className="footer__eachSubList footer__eachSubList--contact">
          <LetterBomb size="28" />
          <p className="footer__text">(+00) 543-123-321</p>
        </li>
        <li className="footer__eachSubList footer__eachSubList--contact">
          <SupportIcon size="28" />
          <p className="footer__text">demo@example.com</p>
        </li>
      </ul>
    </ReadMore>
  );
};
