import { FC, useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { chunkArrayWithSlice } from '_helpers/utils';

type Props = {
  array: Array<{}>;
  value: number;
};

export const ProductDataPage: FC<Props> = ({ array, value }) => {

  const [activePage, setActivePage] = useState(1);

  const [activeArray, setActiveArray] = useState({
    next: true,
    prev: false,
  });

  const chunk = chunkArrayWithSlice(array, value,1);
  const nextPage = () => {
    if (activePage === chunk) {
      return;
    }
    setActivePage((prev) => prev + 1);
    setActiveArray({
      next: false,
      prev: true,
    });
  };

  const prevPage = () => {
    if (activePage === 1) {
      return;
    }
    setActivePage((prev) => prev - 1);
    setActiveArray({
      next: true,
      prev: false,
    });
  };

  const anotherPage = chunk > 2 ? <li className="productCart__item">{activePage +1 }</li> : null;
  const dots =  chunk > 2 ? <li className="productCart__item">...</li> : null;

  return (
    <div className="productCart__pages">
      <div className="productCart__amountBox">
        <ul className="productCart__list">
          <li
            className={`productCart__item ${
              activeArray.prev ? 'show' : 'hide'
            }`}
            onClick={prevPage}
          >
            <IoIosArrowRoundBack />
          </li>
          <li className="productCart__item">{activePage}</li>
          {anotherPage}
          {dots}
          <li className={`productCart__item ${chunk > 1 ? 'show' : 'hide'} `}>
            {chunk}
          </li>
          <li
            className={`productCart__item ${
              activeArray.next ? 'show' : 'hide'
            }`}
            onClick={nextPage}
          >
            <IoIosArrowRoundForward />
          </li>
        </ul>
      </div>
    </div>
  );
};
