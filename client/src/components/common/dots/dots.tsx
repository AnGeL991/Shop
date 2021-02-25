import { FC, MouseEvent } from 'react';
import './dots.scss';

type Props = {
  data: Array<{ id: number }>;
  activeIndex: number;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Dots: FC<Props> = ({ data, activeIndex, onClick }) => {
  const dot = data.map((el, index) => (
    <li key={el.id} className="dots__dot">
      <button
        className={`dots__item ${
          activeIndex === index ? 'dots__active' : null
        }`}
        value={el.id}
        onClick={onClick}
      >
        {el.id}
      </button>
    </li>
  ));

  return <ul className="dots">{dot}</ul>;
};
