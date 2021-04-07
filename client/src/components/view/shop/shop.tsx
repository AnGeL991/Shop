/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Filter, ProductCart } from "components/template";
import { useFilterValue } from "_hooks";
import './shop.scss';
export const Shop: FC = () => {

  const { handleSetPrice } = useFilterValue();

  useEffect(() => {
    handleSetPrice();
  }, []);

  return (
    <section className="page shop">
      <ProductCart />
      <Filter />
    </section>
  );
};
