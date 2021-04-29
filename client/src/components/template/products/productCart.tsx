import { FC } from "react";
import { option } from "db";
import { Icons, Header } from "components/common";
import { ProductDataPage, ProductBox } from "components/template";
import { useFilterValue, useDisplayProduct } from "_hooks";
import "./style/productCart.scss";

export const ProductCart: FC = () => {
  const { handleSetSort } = useFilterValue();
  const {displayWay,handleChangeDisplayWay} = useDisplayProduct();
  const { ViewGrid, Bars } = Icons;
  const {
    sliceArray,
    category,
    displayArray,
    handleSetSlice,
  } = useDisplayProduct(8);

  const options = option.map((el) => (
    <option key={el.name} value={el.name}>
      {el.text}
    </option>
  ));

  const productsToDisplay = sliceArray.map((el) => (
    <div className={`productCart__eachProduct ${displayWay.list && 'productCart__eachProduct--horizontal'} `} key={el._id}>
      <ProductBox item={el} displayWay={displayWay.list} />
   </div> 
  ));

  return (
    <section className="productCart">
      <Header
        title={category === "" ? "Shop" : category}
        className="productCart__header"
      />
      <div className="productCart__wrapper">
        <div className="productCart__displayWay">
          <ViewGrid className="productCart__icon" onClick={()=>handleChangeDisplayWay(2)} />
          <Bars className="productCart__icon" onClick={()=>handleChangeDisplayWay(1)} />
          <span> Showing 1-12 of 15 results </span>
        </div>
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
