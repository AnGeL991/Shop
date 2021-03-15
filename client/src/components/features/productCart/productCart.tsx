import { FC } from 'react';
import { option } from 'db/db';
import { ProductBox } from 'components/common';
import { ProductDataPage } from 'components/features';
import { useFilterValue, useDisplayProduct } from '_hooks';
import './productCart.scss';

export const ProductCart: FC = () => {
  const { handleSetSort } = useFilterValue();

  const { displayArray } = useDisplayProduct();



  const options = option.map((el) => (
    <option key={el.name} value={el.name}>
      {el.text}
    </option>
  ));

  const productsToDisplay = displayArray.map((el) => (
    <ProductBox key={el._id} item={el} width={50} />
  ));

  return (
    <section className="page">
      <div className="productCart__wrapper">
        <form>
          <select
            defaultValue="Default sorting"
            className="productCart__select"
            onClick={handleSetSort}
          >
            {options}
          </select>
        </form>
      </div>
      <div className="productCart__products">
        {productsToDisplay}
        <ProductDataPage array={displayArray} value={8} />
      </div>
    </section>
  );
};
