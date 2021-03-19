import { FC, useEffect } from "react";
import { Header } from "components/common";
import { Filter, ProductCart } from "components/template";
import { useDisplayProduct, useFilterValue } from "_hooks";

export const Shop: FC = () => {
  const { category } = useDisplayProduct();
  const { handleSetPrice } = useFilterValue();

  useEffect(() => {
    handleSetPrice();
  }, []);

  return (
    <section className="page">
      <Header title={category === "" ? "Shop" : category} />
      <ProductCart />
      <Filter />
    </section>
  );
};
