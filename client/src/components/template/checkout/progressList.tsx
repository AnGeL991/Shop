import { FC } from "react";
import {Link} from 'react-router-dom';
type ProgressProps = {
  active: number;
};

export const ProgressList: FC<ProgressProps> = ({ active }) => {
  return (
    <article className="progressList">
      <ul className="progressList__list">
        <li
          className={`progressList__item 
          ${active === 1 ? "progressList__item--active " : null}
            ${active - 1 >= 1 ? "progressList__item--done" : null}
            `}
        >
          <Link to='/checkout'><span>Log in</span></Link>
        </li>
        <li
          className={`progressList__item 
          ${active === 2 ? "progressList__item--active " : null}
            ${active - 1 >= 2 ? "progressList__item--done" : null}
            `}
        >
          <Link to='/checkout/delivery'><span>Delivery</span></Link>
        </li>
        <li
          className={`progressList__item 
          ${active === 3 ? "progressList__item--active " : null}
            ${active - 1 === 3 ? "progressList__item--done" : null}
            `}
        >
          <span>Summary</span>
        </li>
      </ul>
    </article>
  );
};
