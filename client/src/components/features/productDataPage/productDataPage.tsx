import { FC, useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

type Props = {
  array: Array<{}>;
  value: number;
};

const useChunkArray = (array: Array<{}>, amountInChunk: number) => {
  const [activePage, setActivePage] = useState(1);
  const [activeArray, setActiveArray] = useState({
    next: true,
    prev: false,
  });

  const chunk = array.reduce((chunk) => {
    chunk = Math.ceil(array.length / amountInChunk);
    return chunk;
  }, 1);

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

  return { activeArray, activePage, prevPage, nextPage, chunk };
};

export const ProductDataPage: FC<Props> = ({ array, value }) => {
  const { activeArray, activePage, nextPage, prevPage, chunk } = useChunkArray(
    array,
    value
  );

  const dots =
    chunk > 2 && activePage + 1 !== chunk ? (
      <li className="productCart__item">...</li>
    ) : null;

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
