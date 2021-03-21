import { FC } from "react";
import { option } from "db";
import { ProductBox } from "components/common";
import { ProductDataPage } from "components/template";
import { useFilterValue, useDisplayProduct } from "_hooks";
import "./productCart.scss";

export const ProductCart: FC = () => {
  const { handleSetSort } = useFilterValue();

  const { sliceArray, displayArray, handleSetSlice } = useDisplayProduct(8);

  const options = option.map((el) => (
    <option key={el.name} value={el.name}>
      {el.text}
    </option>
  ));

  const productsToDisplay = sliceArray.map((el) => (
    <ProductBox key={el._id} item={el} width={50} />
  ));

  return (
    <section>
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
        <ProductDataPage
          array={displayArray}
          value={8}
          handleSlice={handleSetSlice}
        />
      </div>
    </section>
  );
};
