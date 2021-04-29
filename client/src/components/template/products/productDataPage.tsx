import { FC } from "react";
import {Icons} from 'components/common';
import { useChunkArray } from "_hooks";

type Props = {
  array: Array<{}>;
  value: number;
  handleSlice: (activePage: number) => void;
};

export const ProductDataPage: FC<Props> = ({ array, value, handleSlice }) => {
  const {
    activePage,
    nextPage,
    prevPage,
    chunk,
    handleSetPage,
  } = useChunkArray(array, value, handleSlice);
  const {ArrowLeft,ArrowRight} = Icons;
  
  const dots =
    chunk > 2 && activePage + 1 !== chunk ? (
      <li className="productCart__item">...</li>
    ) : null;

  return (
    <div className="productCart__pages">
      <div className="productCart__amountBox">
        <ul className="productCart__list">
          <li
            className={`productCart__item ${chunk !== 1 ? "show" : "hide"}`}
            onClick={prevPage}
          >
            <ArrowLeft />
          </li>
          <li
            className="productCart__item productCart__item--active"
            onClick={() => handleSetPage(activePage)}
          >
            {activePage}
          </li>
          {dots}
          <li
            className={`productCart__item ${
              chunk > 1 && activePage !== chunk ? "show" : "hide"
            } `}
            onClick={() => handleSetPage(chunk)}
          >
            {chunk}
          </li>
          <li
            className={`productCart__item ${chunk !== 1 ? "show" : "hide"}`}
            onClick={nextPage}
          >
            <ArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
};
